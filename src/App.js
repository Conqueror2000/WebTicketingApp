<<<<<<< HEAD
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';
import TechnicianForm from './components/TechnicianForm';
import LoginForm from './components/LoginForm';
=======
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';
import TechnicianForm from './components/TechnicianForm';
import LoginForm from './components/LoginForm';
import EmployeeDashboard from './components/EmployeeDashboard';
import TechnicianDashboard from './components/TechnicianDashboard';
>>>>>>> 7dda517 (Dashboard)
import './App.css';

function App() {
  const [isEmployee, setIsEmployee] = useState(true);
<<<<<<< HEAD

  return (
    <Router>
      <div className='App container'>
        <h1 className='text-center my-5'>{window.location.pathname === '/' ? 'Web Ticketing App' : 'Register'}</h1>
        <Routes>
          <Route path='/register' element={isEmployee ? <EmployeeForm /> : <TechnicianForm />} />
          <Route path='/' element={<LoginForm />} />
        </Routes>
        <div className='text-center mt-3'>
        {window.location.pathname === '/register' ?
          <button onClick={() => setIsEmployee(!isEmployee)} className='btn btn-primary'>
            {isEmployee ? 'Switch to Technician' : 'Switch to Employee'}
          </button>: void 0}
        </div>
      </div>
=======
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === '/employee' ||
      location.pathname === '/technician'
    ) {
      document.body.classList.remove('default-theme');
    } else {
      document.body.classList.add('default-theme');
    }
  }, [location]);

  return (
    <div
      className={
        window.location.pathname === '/' ||
        window.location.pathname === '/register'
          ? 'App container'
          : void 0
      }>
      {window.location.pathname === '/' ||
      window.location.pathname === '/register' ? (
        <h1 className='text-center my-5'>
          {window.location.pathname === '/' ? 'Web Ticketing App' : 'Register'}
        </h1>
      ) : (
        void 0
      )}
      <Routes>
        <Route
          path='/register'
          element={isEmployee ? <EmployeeForm /> : <TechnicianForm />}
        />
        <Route path='/employee' element={<EmployeeDashboard />} />
        <Route path='/technician' element={<TechnicianDashboard />} />
        <Route path='/' element={<LoginForm />} />
      </Routes>
      {window.location.pathname === '/register' ? (
        <div className='text-center mt-3'>
          <button
            onClick={() => setIsEmployee(!isEmployee)}
            className='btn btn-primary'>
            {isEmployee ? 'Switch to Technician' : 'Switch to Employee'}
          </button>
        </div>
      ) : (
        void 0
      )}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
>>>>>>> 7dda517 (Dashboard)
    </Router>
  );
}

<<<<<<< HEAD
export default App;







// import React, { useState } from 'react';
// import EmployeeForm from './components/EmployeeForm';
// import TechnicianForm from './components/TechnicianForm';
// import LoginForm from './components/LoginForm';
// import './App.css';

// function App() {
//   let [IsEmployee, SetEmployee] = useState(true);
//   function ChangeEmployee() {
//     SetEmployee((Employee) => !Employee);
//   }
//   let [IsRegister, SetRegister] = useState(true);
//   function ChangeRegister() {
//     SetRegister((r) => !r);
//   }
//   return (
//     <div className='App container'>
//       <h1 className='text-center my-5'>Web Ticketing App</h1>
//       {IsRegister ? (
//         <LoginForm />
//       ) : IsEmployee ? (
//         <EmployeeForm />
//       ) : (
//         <TechnicianForm />
//       )}
//       {IsRegister ? (
//         <button className='btn btn-primary' onClick={ChangeRegister}>
//           Register
//         </button>
//       ) : (
//         <button className='btn btn-primary' onClick={ChangeRegister}>
//           Login
//         </button>
//       )}
//       {IsEmployee ? (
//         <button className='btn btn-primary' onClick={ChangeEmployee}>
//           Technician
//         </button>
//       ) : (
//         <button className='btn btn-primary' onClick={ChangeEmployee}>
//           Employee
//         </button>
//       )}
//     </div>
//   );
// }

// export default App;
=======
export default AppWrapper;
>>>>>>> 7dda517 (Dashboard)
