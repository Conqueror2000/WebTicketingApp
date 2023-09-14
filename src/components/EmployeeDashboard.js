import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TicketForm from './TicketForm';
import '../styles/EmployeeDashboard.css'; // Ensure you have your CSS file imported here
// import sortTickets from './Sorting';
import PieChartComponent from './PieChartComponent';
import BarGraph from './BarGraph';

const EmployeeDashboard = () => {
  const [selectedOption, setSelectedOption] = useState('Show Tickets');
  const [tickets, setTickets] = useState([
    {
      TicketNumber: 1,
      Sector: 'IT',
      TypeOfEquip: 'Laptop',
      Status: 'Active',
      EmployeeId: 'E002',
      Priority: 'High',
      Comment: 'Not working',
      AssignedTo: 'T001',
    },
    {
      TicketNumber: 2,
      Sector: 'HR',
      TypeOfEquip: 'Printer',
      Status: 'Completed',
      EmployeeId: 'E002',
      Priority: 'Medium',
      Comment: 'Paper jam',
      AssignedTo: 'T002',
    },
    {
      TicketNumber: 3,
      Sector: 'HR',
      TypeOfEquip: 'Mouse',
      Status: 'Onhold',
      EmployeeId: 'E002',
      Priority: 'Low',
      Comment: 'Paper jam',
      AssignedTo: 'T002',
    },
    {
      TicketNumber: 4,
      Sector: 'HR',
      TypeOfEquip: 'Printer',
      Status: 'Raised',
      EmployeeId: 'E002',
      Priority: 'Critical',
      Comment: 'Paper jam',
      AssignedTo: 'T002',
    },
    {
      TicketNumber: 5,
      Sector: 'HR',
      TypeOfEquip: 'Printer',
      Status: 'Raised',
      EmployeeId: 'E002',
      Priority: 'Medium',
      Comment: 'Paper jam',
      AssignedTo: 'T002',
    },
    {
      TicketNumber: 6,
      Sector: 'HR',
      TypeOfEquip: 'Printer',
      Status: 'Raised',
      EmployeeId: 'E002',
      Priority: 'Medium',
      Comment: 'Paper jam',
      AssignedTo: 'T002',
    },
    {
      TicketNumber: 7,
      Sector: 'HR',
      TypeOfEquip: 'Printer',
      Status: 'Raised',
      EmployeeId: 'E002',
      Priority: 'Medium',
      Comment: 'Paper jam',
      AssignedTo: 'T002',
    },
    {
      TicketNumber: 8,
      Sector: 'HR',
      TypeOfEquip: 'Printer',
      Status: 'Raised',
      EmployeeId: 'E002',
      Priority: 'Medium',
      Comment: 'Paper jam',
      AssignedTo: 'T002',
    },
  ]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [userProfile] = useState({
    name: 'Asutosh', // Randomly generated username
    profileImage: 'path/to/profile-image.jpg', // Replace with the path to the user's profile image
  });

  // Define the ticket status values
  const RaisedTickets = tickets.filter((ticket) => ticket.Status === 'Raised');
  const CompletedTickets = tickets.filter(
    (ticket) => ticket.Status === 'Completed'
  );
  const OnholdTickets = tickets.filter((ticket) => ticket.Status === 'Onhold');
  const ActiveTickets = tickets.filter((ticket) => ticket.Status === 'Active');

  const CriticalTickets = tickets.filter(
    (ticket) => ticket.Priority === 'Critical'
  );
  const HighTickets = tickets.filter((ticket) => ticket.Priority === 'High');
  const MediumTickets = tickets.filter(
    (ticket) => ticket.Priority === 'Medium'
  );
  const LowTickets = tickets.filter((ticket) => ticket.Priority === 'Low');

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/tickets')
      .then((response) => {
        setTickets((prevTickets) => [...prevTickets, ...response.data]);
      })
      .catch((error) => {
        console.error('There was an error fetching data:', error);
      });
  }, []);

  const handleTicketClick = (ticket) => {
    setSelectedTicket(ticket);
  };

  const closeMiniScreen = () => {
    setSelectedTicket(null);
  };

  const handleLogout = () => {
    // Implement logout logic here
    // For example, clear user authentication state and redirect to the login page
  };

  const handleShowTickets = () => {
    setSelectedOption('Show Tickets');
  };

  const handleRaiseTicket = () => {
    setSelectedOption('Raise Ticket');
  };

  function getStatusColor(status) {
    switch (status) {
      case 'Raised':
        return 'gray';
      case 'Active':
        return '#b400d8';
      case 'Onhold':
        return 'red';
      case 'Completed':
        return 'green';
      default:
        return 'black'; // Default color if status is not recognized
    }
  }

  const data = [
    RaisedTickets.length,
    CompletedTickets.length,
    OnholdTickets.length,
    ActiveTickets.length,
  ];
  const fieldNames = ['Critical', 'High', 'Medium', 'Low'];
  const fieldValues = [
    CriticalTickets.length,
    HighTickets.length,
    MediumTickets.length,
    LowTickets.length,
  ];

  return (
    <div className='employee-dashboard'>
      <div className='left-section'>
        <div className='user-profile'>
          <div className='profile-image'>
            <img src={userProfile.profileImage} alt='User Profile' />
          </div>
          <div className='profile-info'>
            <h3>{userProfile.name}</h3>
            <button className='button-edit-profile'>Edit Profile</button>
          </div>
        </div>

        <div className='button-group'>
          <h4>Actions</h4>
          <button
            className={`button1 ${
              selectedOption === 'Show Tickets' ? 'active' : ''
            }`}
            onClick={handleShowTickets}>
            Show Tickets
          </button>
          <button
            className={`button1 ${
              selectedOption === 'Raise Ticket' ? 'active' : ''
            }`}
            onClick={handleRaiseTicket}>
            Raise Ticket
          </button>
        </div>
        <div className='ticket-status-box'>
          <h3>
            Total Tickets:-{' '}
            {RaisedTickets.length +
              CompletedTickets.length +
              OnholdTickets.length +
              ActiveTickets.length}
          </h3>
          <ul>
            <li>Yet To Assign:- {RaisedTickets.length}</li>
            <li>Resolved:- {CompletedTickets.length}</li>
            <li>Onhold:- {OnholdTickets.length}</li>
            <li>Active:- {ActiveTickets.length}</li>
          </ul>
        </div>
        <button className='button-logout' onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className='right-section' style={{ backgroundColor: '#E8EBEE' }}>
        <h1
          style={{
            backgroundColor: '#F5F5F5',
            padding: '15px',
            marginTop: '-20px',
            marginLeft: '-20px',
            width: '103.5%',
            paddingLeft: '20px',
          }}>
          Employee Dashboard
        </h1>
        {selectedOption === 'Raise Ticket' && <TicketForm />}
        {selectedOption === 'Show Tickets' && (
          <div>
            {tickets.map((ticket) => (
              <div
                style={{
                  backgroundColor: '#F5F5F5',
                  marginLeft: '30px',
                  width: '95%',
                }}
                key={ticket.TicketNumber}
                onClick={() => handleTicketClick(ticket)}
                className='ticket-item'>
                <h4 className='ticket-number'>Ticket #{ticket.TicketNumber}</h4>
                <hr className='line-separator' />
                <div className='ticket-info-container'>
                  <p className='ticket-info comment'>
                    Comment: {ticket.Comment}
                  </p>
                  <p
                    className='ticket-info status'
                    style={{ color: getStatusColor(ticket.Status) }}>
                    Status: {ticket.Status}
                  </p>
                </div>
                <div
                  className={`ticket-info-container ${
                    !ticket.AssignedTo ? 'unassigned' : ''
                  }`}>
                  <p className='ticket-info assigned-to'>
                    Assigned To: {ticket.AssignedTo}
                  </p>
                  <p className='ticket-info priority'>
                    Priority: {ticket.Priority}
                  </p>
                </div>
              </div>
            ))}
            <div>
              <div style={{ height: '150px' }}>
                <PieChartComponent data={data} />
              </div>
            </div>
            <div>
              <h4>Bar Graph Example</h4>
              <div style={{ maxHeight: '150px', width: '40%' }}>
                <BarGraph labels={fieldNames} values={fieldValues} />
              </div>
            </div>
          </div>
        )}
      </div>

      {selectedTicket && (
        <div className='ticket-details-mini-screen'>
          <button className='button2' onClick={closeMiniScreen}>
            Close
          </button>
          <h3>Details for Ticket #{selectedTicket.TicketNumber}</h3>
          <p>Sector: {selectedTicket.Sector}</p>
          <p>Type of Equipment: {selectedTicket.TypeOfEquip}</p>
          <p>Status: {selectedTicket.Status}</p>
          <p>Date: {selectedTicket.Date}</p>
          <p>Employee ID: {selectedTicket.EmployeeId}</p>
          <p>Priority: {selectedTicket.Priority}</p>
          <p>Comment: {selectedTicket.Comment}</p>
          <p>Assigned To: {selectedTicket.AssignedTo}</p>
        </div>
      )}
    </div>
  );
};

export default EmployeeDashboard;
