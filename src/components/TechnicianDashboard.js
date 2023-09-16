import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import TicketForm from './TicketForm';
<<<<<<< HEAD
import '../styles/EmployeeDashboard.css'; 
import PieChartComponent from './PieChartComponent';
import BarGraph from './BarGraph';
import { NameOfUser } from './LoginForm';

const EmployeeDashboard = () => {
  const [selectedOption, setSelectedOption] = useState('Show Tickets');
=======
import '../styles/EmployeeDashboard.css';
import PieChartComponent from './PieChartComponent';
import BarGraph from './BarGraph';
import { NameOfUser } from './LoginForm';
import { useNavigate } from 'react-router-dom';

const TechnicianDashboard = ({ tick, updateTicketStatus }) => {
  const [selectedOption] = useState('Show Tickets');
>>>>>>> 8828d63 (Conquer commit)
  const [tickets, setTickets] = useState([
    {
      TicketNumber: 1,
      Sector: 'IT',
      TypeOfEquip: 'Laptop',
      Status: 'Active',
      EmployeeId: 'E002',
      Priority: 'High',
      Comment: 'Not working',
<<<<<<< HEAD
      AssignedTo: 'T001',
=======
      AssignedTo: 'T002',
    },
    {
      TicketNumber: 1,
      Sector: 'IT',
      TypeOfEquip: 'Laptop',
      Status: 'Active',
      EmployeeId: 'E002',
      Priority: 'High',
      Comment: 'Not working',
      AssignedTo: 'T002',
>>>>>>> 8828d63 (Conquer commit)
    },
    {
      TicketNumber: 2,
      Sector: 'HR',
      TypeOfEquip: 'Printer',
      Status: 'Completed',
<<<<<<< HEAD
      EmployeeId: 'E002',
=======
      EmployeeId: 'E005',
>>>>>>> 8828d63 (Conquer commit)
      Priority: 'Medium',
      Comment: 'Paper jam',
      AssignedTo: 'T002',
    },
    {
      TicketNumber: 3,
      Sector: 'HR',
      TypeOfEquip: 'Mouse',
      Status: 'Onhold',
<<<<<<< HEAD
      EmployeeId: 'E002',
=======
      EmployeeId: 'E0012',
>>>>>>> 8828d63 (Conquer commit)
      Priority: 'Low',
      Comment: 'Paper jam',
      AssignedTo: 'T002',
    },
    {
      TicketNumber: 4,
      Sector: 'HR',
      TypeOfEquip: 'Printer',
      Status: 'Raised',
<<<<<<< HEAD
      EmployeeId: 'E002',
=======
      EmployeeId: 'E0018',
>>>>>>> 8828d63 (Conquer commit)
      Priority: 'Critical',
      Comment: 'Paper jam',
      AssignedTo: 'T002',
    },
    {
      TicketNumber: 5,
      Sector: 'HR',
      TypeOfEquip: 'Printer',
      Status: 'Raised',
<<<<<<< HEAD
      EmployeeId: 'E002',
=======
      EmployeeId: 'E007',
>>>>>>> 8828d63 (Conquer commit)
      Priority: 'Medium',
      Comment: 'Paper jam',
      AssignedTo: 'T002',
    },
    {
      TicketNumber: 6,
      Sector: 'HR',
      TypeOfEquip: 'Printer',
      Status: 'Raised',
<<<<<<< HEAD
      EmployeeId: 'E002',
=======
      EmployeeId: 'E0011',
>>>>>>> 8828d63 (Conquer commit)
      Priority: 'Medium',
      Comment: 'Paper jam',
      AssignedTo: 'T002',
    },
    {
      TicketNumber: 7,
      Sector: 'HR',
      TypeOfEquip: 'Printer',
      Status: 'Raised',
<<<<<<< HEAD
      EmployeeId: 'E002',
=======
      EmployeeId: 'E009',
>>>>>>> 8828d63 (Conquer commit)
      Priority: 'Medium',
      Comment: 'Paper jam',
      AssignedTo: 'T002',
    },
    {
      TicketNumber: 8,
      Sector: 'HR',
      TypeOfEquip: 'Printer',
      Status: 'Raised',
<<<<<<< HEAD
      EmployeeId: 'E002',
=======
      EmployeeId: 'E0077',
>>>>>>> 8828d63 (Conquer commit)
      Priority: 'Medium',
      Comment: 'Paper jam',
      AssignedTo: 'T002',
    },
  ]);
  const [selectedTicket, setSelectedTicket] = useState(null);

  // New state variables for sorting
  const [sortCriteria, setSortCriteria] = useState('TicketNumber');
  const [sortOrder, setSortOrder] = useState('asc');

  //New state varible for filtering
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterPriority, setFilterPriority] = useState('All');

<<<<<<< HEAD
=======
  // New state variable to store the updated status
  const [newStatus, setNewStatus] = useState('');

  // Use state to manage the popup visibility
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const navigate = useNavigate();

>>>>>>> 8828d63 (Conquer commit)
  // Define the ticket status values
  const RaisedTickets = tickets.filter(
    (ticket) => ticket.Status === 'Raised'
  ).length;
  const CompletedTickets = tickets.filter(
    (ticket) => ticket.Status === 'Completed'
  ).length;
  const OnholdTickets = tickets.filter(
    (ticket) => ticket.Status === 'Onhold'
  ).length;
  const ActiveTickets = tickets.filter(
    (ticket) => ticket.Status === 'Active'
  ).length;

  const CriticalTickets = tickets.filter(
    (ticket) => ticket.Priority === 'Critical'
  ).length;
  const HighTickets = tickets.filter(
    (ticket) => ticket.Priority === 'High'
  ).length;
  const MediumTickets = tickets.filter(
    (ticket) => ticket.Priority === 'Medium'
  ).length;
  const LowTickets = tickets.filter(
    (ticket) => ticket.Priority === 'Low'
  ).length;

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

<<<<<<< HEAD
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
=======
  // const handleShowTickets = () => {
  //   setSelectedOption('Show Tickets');
  // };

  // const handleRaiseTicket = () => {
  //   setSelectedOption('Raise Ticket');
  // };

>>>>>>> 8828d63 (Conquer commit)

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

  // New sorting function
  const sortedTickets = useMemo(() => {
    let filteredTickets = tickets;

    if (filterStatus !== 'All') {
      filteredTickets = tickets.filter(
        (ticket) => ticket.Status === filterStatus
      );
    }

    if (filterPriority !== 'All') {
      filteredTickets = filteredTickets.filter(
        (ticket) => ticket.Priority === filterPriority
      );
    }

    return filteredTickets.sort((a, b) => {
      if (sortCriteria === 'Priority') {
        const priorityOrder = ['Low', 'Medium', 'High', 'Critical'];
        return sortOrder === 'asc'
          ? priorityOrder.indexOf(a.Priority) -
              priorityOrder.indexOf(b.Priority)
          : priorityOrder.indexOf(b.Priority) -
              priorityOrder.indexOf(a.Priority);
      } else {
        return sortOrder === 'asc'
          ? a.TicketNumber - b.TicketNumber
          : b.TicketNumber - a.TicketNumber;
      }
    });
<<<<<<< HEAD
  }, [tickets, sortCriteria, sortOrder, filterStatus,filterPriority]);
=======
  }, [tickets, sortCriteria, sortOrder, filterStatus, filterPriority]);
>>>>>>> 8828d63 (Conquer commit)

  const data = [RaisedTickets, CompletedTickets, OnholdTickets, ActiveTickets];
  const fieldNames = ['Critical', 'High', 'Medium', 'Low'];
  const fieldValues = [CriticalTickets, HighTickets, MediumTickets, LowTickets];

<<<<<<< HEAD
  return (
    <div className='employee-dashboard'>
      <div className='left-section'>
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
        {/* <div className='ticket-status-box'>
          <h3>
            Total Tickets:-{' '}
            {RaisedTickets + CompletedTickets + OnholdTickets + ActiveTickets}
          </h3>
          <ul>
            <li>Yet To Assign:- {RaisedTickets}</li>
            <li>Resolved:- {CompletedTickets}</li>
            <li>Onhold:- {OnholdTickets}</li>
            <li>Active:- {ActiveTickets}</li>
          </ul>
        </div> */}
        <div>
          <div style={{ height: '150px' }}>
            <PieChartComponent data={data} />
          </div>
          <h4>Bar Graph Example</h4>
          <div style={{ maxHeight: '150px' }}>
            <BarGraph labels={fieldNames} values={fieldValues} />
          </div>
        </div>
        <button className='button-logout' onClick={handleLogout}>
          Logout
        </button>
      </div>
=======
  const handleStatusChange = (event) => {
    setNewStatus(event.target.value);
  };

  const handleEdit = () => {
    if (selectedTicket && newStatus !== '') {
      // Create an object with the updated ticket data
      const updatedTicket = {
        ...selectedTicket,
        Status: newStatus,
      };

      // Send a POST request to update the ticket in the database
      axios
        .post('http://localhost:5000/api/update-ticket', updatedTicket)
        .then((response) => {
          // Handle success
          console.log('Ticket status updated successfully:', response.data);

          // Close the mini-screen
          closeMiniScreen();

          // Update the tickets in the parent component's state
          updateTicketStatus(updatedTicket);
        })
        .catch((error) => {
          // Handle error
          alert(error.message);
          console.error('Error updating ticket status:', error);
        });
    }
  };

  // Function to handle logout button click
  const handleShowLogoutPopup = () => {
    setShowLogoutPopup(true);
  };

  // Function to cancel logout
  const handleCancelLogout = () => {
    setShowLogoutPopup(false);
  };

  const handleLogout = () => {
    // Show the logout confirmation popup
    setShowLogoutPopup(true);
  };
  // Function to confirm and perform logout
  const handleConfirmLogout = () => {
    // Implement logout logic here
    // For example, clear user authentication state and redirect to the login page

    // Redirect to the '/' route after successful logout
    navigate('/');
  };

  // Render the logout confirmation popup if showLogoutPopup is true
  const renderLogoutPopup = () => {
    return (
      <div
        className='logout-popup'
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#fff',
          padding: '20px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
          borderRadius: '5px',
          textAlign: 'center',
        }}>
        <p
          style={{
            fontSize: '18px',
            marginBottom: '10px',
          }}>
          Are you sure you want to log out?
        </p>

        <button
          className='logout-button'
          onClick={handleConfirmLogout}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#3498db',
            color: '#fff',
            border: 'none',
            marginRight: '10px',
          }}>
          Yes
        </button>

        <button
          className='cancel-button'
          onClick={handleCancelLogout}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#e74c3c',
            color: '#fff',
            border: 'none',
          }}>
          Cancel
        </button>
      </div>
    );
  };

  return (
    <div className='employee-dashboard'>
>>>>>>> 8828d63 (Conquer commit)
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
          {NameOfUser} Dashboard
        </h1>

        {/* Sorting & filtering controls, only visible when 'Show Tickets' is selected */}
        {selectedOption === 'Show Tickets' && (
          <div className='sorting-controls'>
            <h4>Sort and Filter Tickets</h4>
            <div className='sort-filter-section'>
              <div className='sort-filter-item'>
                <label className='label1'>SortBy: </label>
                <select onChange={(e) => setSortCriteria(e.target.value)}>
                  <option value='TicketNumber'> Ticket Number</option>
                  <option value='Priority'>Sort by Priority</option>
                </select>
              </div>
              <div className='sort-filter-item'>
                <label className='label1'>Order: </label>
                <select onChange={(e) => setSortOrder(e.target.value)}>
                  <option value='asc'>Ascending</option>
                  <option value='desc'>Descending</option>
                </select>
              </div>
              <div className='sort-filter-item'>
                <label className='label1'>Status: </label>
                <select onChange={(e) => setFilterStatus(e.target.value)}>
                  <option value='All'>All</option>
                  <option value='Active'>Active</option>
                  <option value='Onhold'>OnHold</option>
                  <option value='Completed'>Completed</option>
                  <option value='Raised'>Raised</option>
                </select>
              </div>
              <div className='sort-filter-item'>
                <label className='label1'>Priority: </label>
                <select onChange={(e) => setFilterPriority(e.target.value)}>
                  <option value='All'>All</option>
                  <option value='Low'>Low</option>
                  <option value='Medium'>Medium</option>
                  <option value='High'>High</option>
                  <option value='Critical'>Critical</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Existing functionality for raising a ticket */}
        {selectedOption === 'Raise Ticket' && <TicketForm />}

        {/* Existing functionality for showing tickets */}
        {selectedOption === 'Show Tickets' && (
          <div>
            {sortedTickets.map((ticket) => (
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
<<<<<<< HEAD
                <div
                  className={`ticket-info-container ${
                    !ticket.AssignedTo ? 'unassigned' : ''
                  }`}>
                  <p className='ticket-info assigned-to'>
                    Assigned To: {ticket.AssignedTo}
=======
                <div className={`ticket-info-container`}>
                  <p className='ticket-info assigned-to'>
                    Employee: {ticket.EmployeeId}
>>>>>>> 8828d63 (Conquer commit)
                  </p>
                  <p className='ticket-info priority'>
                    Priority: {ticket.Priority}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
<<<<<<< HEAD

      {selectedTicket && (
        <div className='ticket-details-mini-screen'>
          <button className='button2' onClick={closeMiniScreen}>
            Close
          </button>
=======
      <div className='left-section'>
        {/* <div className='button-group'>
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
        </div> */}
        <div>
          <div style={{ height: '150px' }}>
            <PieChartComponent data={data} />
          </div>
          <h4>Bar Graph Example</h4>
          <div style={{ maxHeight: '150px' }}>
            <BarGraph labels={fieldNames} values={fieldValues} />
          </div>
        </div>
        <div className='ticket-status-box'>
          <h3>
            Total Tickets:-{' '}
            {RaisedTickets + CompletedTickets + OnholdTickets + ActiveTickets}
          </h3>
          <ul>
            <li>Yet To Start:- {RaisedTickets}</li>
            <li>Resolved:- {CompletedTickets}</li>
            <li>Onhold:- {OnholdTickets}</li>
            <li>Active:- {ActiveTickets}</li>
          </ul>
        </div>
        <button className='button-logout' onClick={handleLogout}>
          Logout
        </button>
      </div>

      {selectedTicket && (
        <div className='ticket-details-mini-screen'>
>>>>>>> 8828d63 (Conquer commit)
          <h3>Details for Ticket #{selectedTicket.TicketNumber}</h3>
          <p>Sector: {selectedTicket.Sector}</p>
          <p>Type of Equipment: {selectedTicket.TypeOfEquip}</p>
          <p>Status: {selectedTicket.Status}</p>
          <p>Date: {selectedTicket.Date}</p>
          <p>Employee ID: {selectedTicket.EmployeeId}</p>
          <p>Priority: {selectedTicket.Priority}</p>
          <p>Comment: {selectedTicket.Comment}</p>
          <p>Assigned To: {selectedTicket.AssignedTo}</p>
<<<<<<< HEAD
        </div>
      )}
=======
          <div className='ticket-info-container'>
            <p className='ticket-info status'>
              Edit Status:
              <select onChange={handleStatusChange} value={newStatus}>
                <option value='Active'>Active</option>
                <option value='Onhold'>OnHold</option>
                <option value='Completed'>Completed</option>
              </select>
            </p>
          </div>
          <div className='button-container'>
            <button
              className='button2 edit-button'
              onClick={handleEdit}
              style={{ marginRight: '225px' }}>
              Submit
            </button>
            <button className='button2' onClick={closeMiniScreen}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Render the logout confirmation popup if showLogoutPopup is true */}
      {showLogoutPopup && renderLogoutPopup()}
>>>>>>> 8828d63 (Conquer commit)
    </div>
  );
};

<<<<<<< HEAD
export default EmployeeDashboard;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../styles/TechnicianDashboard.css';

// const TechnicianDashboard = () => {
//   const [tickets, setTickets] = useState([
//     {
//       TicketNumber: 1,
//       Sector: 'IT',
//       TypeOfEquip: 'Laptop',
//       Status: 'Pending',
//       Date: '2021-09-01',
//       EmployeeId: 'E001',
//       Priority: 'High',
//       Comment: 'Not working',
//       AssignedTo: 'T001',
//     },
//     {
//       TicketNumber: 2,
//       Sector: 'HR',
//       TypeOfEquip: 'Printer',
//       Status: 'Active',
//       Date: '2021-09-02',
//       EmployeeId: 'E002',
//       Priority: 'Medium',
//       Comment: 'Paper jam',
//       AssignedTo: 'T002',
//     },
//   ]);
//   const [selectedTicket, setSelectedTicket] = useState(null);

//   useEffect(() => {
//     axios
//       .get('http://localhost:5000/api/tickets')
//       .then((response) => {
//         setTickets((prevTickets) => [...prevTickets, ...response.data]);
//       })
//       .catch((error) => {
//         console.error('There was an error fetching data:', error);
//       });
//   }, []);

//   const handleTicketClick = (ticket) => {
//     setSelectedTicket(ticket);
//   };

//   const closeMiniScreen = () => {
//     setSelectedTicket(null);
//   };

//   const handleLogout = () => {
//     // Implement logout logic here
//     // For example, clear user authentication state and redirect to the login page
//   };

//   return (
//     <div className='technician-dashboard'>
//       <div className='left-section'>
//         <div className='profile'>Your Profile Here</div>
//         <div className='ticket-summary'>Total Tickets: {tickets.length}</div>
//         <button className='button1' onClick={handleLogout}>
//           Logout
//         </button>
//       </div>
//       <div className='right-section'>
//         <h1>Welcome To Technician Dashboard</h1>
//         <div className='pending-tickets'>
//           <h2>Pending Tickets</h2>
//           {tickets
//             .filter((ticket) => ticket.Status === 'Pending')
//             .map((ticket) => (
//               <div
//                 key={ticket.TicketNumber}
//                 onClick={() => handleTicketClick(ticket)}>
//                 {ticket.Comment}
//               </div>
//             ))}
//         </div>
//         <div className='active-tickets'>
//           <h2>Active Tickets</h2>
//           {tickets
//             .filter((ticket) => ticket.Status === 'Active')
//             .map((ticket) => (
//               <div
//                 key={ticket.TicketNumber}
//                 onClick={() => handleTicketClick(ticket)}>
//                 {ticket.Comment}
//               </div>
//             ))}
//         </div>
//       </div>

//       {selectedTicket && (
//         <div className='ticket-details-mini-screen'>
//           <button className='button2' onClick={closeMiniScreen}>
//             X
//           </button>
//           <h3>Details for Ticket #{selectedTicket.TicketNumber}</h3>
//           <p>Sector: {selectedTicket.Sector}</p>
//           <p>Type of Equipment: {selectedTicket.TypeOfEquip}</p>
//           <p>Status: {selectedTicket.Status}</p>
//           <p>Date: {selectedTicket.Date}</p>
//           <p>Employee ID: {selectedTicket.EmployeeId}</p>
//           <p>Priority: {selectedTicket.Priority}</p>
//           <p>Comment: {selectedTicket.Comment}</p>
//           <p>Assigned To: {selectedTicket.AssignedTo}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TechnicianDashboard;
=======
export default TechnicianDashboard;
>>>>>>> 8828d63 (Conquer commit)
