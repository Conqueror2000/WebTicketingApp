import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';
import TechnicianForm from './components/TechnicianForm';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  const [isEmployee, setIsEmployee] = useState(true);

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
    </Router>
  );
}

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
