import React from 'react'
import logo from '../../img/logo1.png'
import { Link } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext'
function Header() {
  const [auth,setAuth] = useAuth()
  const handleLogout=()=>{
    setAuth({
      ...auth,user:null,token:''
    })
    localStorage.removeItem('auth')
  }
  return (
    <div>
    <nav className="navbar navbar-expand-lg ms-auto navbar-light bg-light " >
  <div className="container-fluid">
    <Link className="navbar-brand" href="#" style={{marginLeft:'80px'}}> <img src={logo} alt="BNCA Logo"  width= '144px' height='51px' /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Academics</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/p_details">Details</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Admissions</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">People</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Research</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard/admin/department/courses">Students</Link>
        </li>
        
       { !auth.token ? (
          <>
          <li className="nav-item">
          <Link className="nav-link" to="/register">Sign Up</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
          </>
        ) : (
          <>
          <li className="nav-item">
          <Link className="nav-link" onClick={handleLogout} to="/login">Logout</Link>
        </li>
          </>
        )
       }

        <li className="nav-item">
          <Link className="nav-link" to='/dashboard' >Admin_Dashboard</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
