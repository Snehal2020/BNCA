import React,{useEffect,useState} from 'react'
import { useAuth } from '../../../Context/AuthContext'
import { Outlet } from "react-router-dom";
import axios from "axios";
import Homepage from '../../../Pages/Homepage';
import Admin_Dashboard from '../Admin_Dashboard';
import Login from '../../../Pages/Auth/Login';
// import Login from '../../../pages/Auth/Login'


export default function PrivateRoute() {
   const [ok,setOk] = useState(false)
   const [auth,setAuth]=useAuth()

   useEffect(() => {
    console.log("check...")
    const authCheck = async () => {
      const res = await axios.get("/auth/user-auth");
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet/> : <Login></Login>;
}


