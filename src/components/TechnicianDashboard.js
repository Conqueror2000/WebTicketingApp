import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/TechnicianDashboard.css';

const TechnicianDashboard = () => {
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
      Status: 'Active',
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
    <div className='technician-dashboard'>
      <div className='left-section'>
        <div className='profile'>Your Profile Here</div>
        <div className='ticket-summary'>Total Tickets: {tickets.length}</div>
        <button className='button1' onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className='right-section'>
        <h1>Welcome To Technician Dashboard</h1>
        <div className='pending-tickets'>
          <h2>Pending Tickets</h2>
          {tickets
            .filter((ticket) => ticket.Status === 'Pending')
            .map((ticket) => (
              <div
                key={ticket.TicketNumber}
                onClick={() => handleTicketClick(ticket)}>
                {ticket.Comment}
              </div>
            ))}
        </div>
        <div className='active-tickets'>
          <h2>Active Tickets</h2>
          {tickets
            .filter((ticket) => ticket.Status === 'Active')
            .map((ticket) => (
              <div
                key={ticket.TicketNumber}
                onClick={() => handleTicketClick(ticket)}>
                {ticket.Comment}
              </div>
            ))}
        </div>
      </div>

      {selectedTicket && (
        <div className='ticket-details-mini-screen'>
          <button className='button2' onClick={closeMiniScreen}>
            X
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

export default TechnicianDashboard;
