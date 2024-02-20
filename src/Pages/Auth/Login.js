import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import logo from '../../img/logo1.png'
import { toast } from 'react-hot-toast';
import { useAuth } from '../../Context/AuthContext';
import Layout from '../../Components/Layout1/Layout';
function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth();
  
    const navigate = useNavigate();
    const location = useLocation();
  
    // form function
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post(`auth/login`, {
          email,
          password,
        });
        if (res.data.success) {
          toast.success(res.data && res.data.message);
          console.log(res.data)
          setAuth({
            ...auth,
            user: res.data.user,
            token: res.data.token,
          });
          localStorage.setItem("auth", JSON.stringify(res.data));
          navigate(location.state || "/");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    };

  return (
   <Layout>
       <div>
  <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
    <div className=" overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
      <div className="d-flex align-items-center justify-content-center w-100">
        <div className="row justify-content-center w-100">
          <div className="col-md-8 col-lg-6 col-xxl-3">
            <div className="card mb-0">
              <div className="card-body">
                <a href="#" className="text-nowrap logo-img text-center d-block py-3 w-100">
                  <img src={logo} width={180} alt />
                </a>
                <p className="text-center">Your Social Campaigns</p>
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="form-check">
                      <input className="form-check-input primary" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                      <label className="form-check-label text-dark" htmlFor="flexCheckChecked">
                        Remeber this Device
                      </label>
                    </div>
                    <a className="text-primary fw-bold" href="./index.html">Forgot Password ?</a>
                  </div>
                  <a href="#" onClick={handleSubmit} className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">Sign In</a>
                
                  <div className="d-flex align-items-center justify-content-center">
                    <p className="fs-4 mb-0 fw-bold">New to Modernize?</p>
                    <a className="text-primary fw-bold ms-2" href="/register">Create an account</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
   </Layout>
  )
}

export default Login
