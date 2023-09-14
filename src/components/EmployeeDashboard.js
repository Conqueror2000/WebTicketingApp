import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TicketForm from './TicketForm';
import '../styles/EmployeeDashboard.css';


const EmployeeDashboard = () => {
  const [selectedOption, setSelectedOption] = useState('Profile');
  const [tickets, setTickets] = useState([
    {
      TicketNumber: 1,
      Sector: 'IT',
      TypeOfEquip: 'Laptop',
      Status: 'Pending',
      Date: '2021-09-01',
      EmployeeId: 'E001',
      Priority: 'High',
      Comment: 'Not working',
      AssignedTo: 'T001',
    },
    {
      TicketNumber: 2,
      Sector: 'HR',
      TypeOfEquip: 'Printer',
      Status: 'Completed',
      Date: '2021-09-02',
      EmployeeId: 'E002',
      Priority: 'Medium',
      Comment: 'Paper jam',
      AssignedTo: 'T002',
    },
  ]);
  const [selectedTicket, setSelectedTicket] = useState(null);

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

  return (
    <div className='employee-dashboard'>
      <div className='left-section'>
        <button
          className='button1'
          onClick={() => setSelectedOption('Profile')}>
          Profile
        </button>
        <button
          className='button1'
          onClick={() => setSelectedOption('Raise Ticket')}>
          Raise Ticket
        </button>
        <button
          className='button1'
          onClick={() => setSelectedOption('Show Tickets')}>
          Show Tickets
        </button>
        <button className='button1' onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className='right-section'>
        <h1>Welcome To The Employee Dashboard</h1>
        {selectedOption === 'Profile' && <div>Your Profile Here</div>}
        {selectedOption === 'Raise Ticket' && <TicketForm />}
        {selectedOption === 'Show Tickets' &&
          tickets.map((ticket) => (
            <div
              key={ticket.TicketNumber}
              onClick={() => handleTicketClick(ticket)}>
              {ticket.Comment}
            </div>
          ))}
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
