
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Homepage from './Pages/Homepage';
import Portfolio_list from './Pages/Portfolio_list';
import Details from './Pages/Details';
import Admin_Dashboard from './Dashboard/Admin/Admin_Dashboard';
import AddDepartment from './Dashboard/Admin/AddDepartment';
import Course from './Dashboard/Admin/Course';
import PrivateRoute from './Dashboard/Admin/Route/PrivateRoute';
import Register from './Pages/Auth/Register';
import Login from './Pages/Auth/Login';
import Pdf from './Pages/Pdf'
import { useState } from 'react';
import ManageDept from './Dashboard/Admin/ManageDept';

function App() {
  
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Homepage></Homepage>}/>
      {/* <Route path='/' element={<Pdf></Pdf>}/> */}
      <Route path='/register' element={<Register></Register>}/>
      <Route path='/login' element={<Login></Login>}/>
      <Route path='/p_list' element={<Portfolio_list></Portfolio_list>}/>
      <Route path='/p_details' element={<Details></Details>}/>
      <Route path='/dashboard' element={<PrivateRoute></PrivateRoute>}>
        <Route path='' element={<Admin_Dashboard></Admin_Dashboard>}>
      </Route>
      </Route>
      <Route path='/dashboard/admin/department' element={<Admin_Dashboard></Admin_Dashboard>}/>
      <Route path='/dashboard/admin/course' element={<Course></Course>}/>
      
    </Routes>
    </div>
  );
}

export default App;
