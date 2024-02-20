import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../img/logo1.png";
import { toast } from "react-hot-toast";
import axios from "axios";
import Layout from "../../Components/Layout1/Layout";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault(); //cancels the default event, here it is submit event
    try {
      const res = await axios.post(`/auth/register`, {
        name,
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
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
        <div
          className="page-wrapper"
          id="main-wrapper"
          data-layout="vertical"
          data-navbarbg="skin6"
          data-sidebartype="full"
          data-sidebar-position="fixed"
          data-header-position="fixed">
          <div className=" overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
            <div className="d-flex align-items-center justify-content-center w-100">
              <div className="row justify-content-center w-100">
                <div className="col-md-8 col-lg-6 col-xxl-3">
                  <div className="card mb-0">
                    <div className="card-body">
                      <a
                        href="#"
                        className="text-nowrap logo-img text-center d-block py-3 w-100"
                      >
                        <img src={logo} width={180} alt />
                      </a>
                      <p className="text-center">Your Social Campaigns</p> 
                      <form>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputtext1"
                            className="form-label"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control"
                            id="exampleInputtext1"
                            aria-describedby="textHelp"
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Email Address
                          </label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                        <a
                          href="#"
                          onClick={handleSubmit}
                          className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2"
                        >
                          Sign Up
                        </a>
                        <div className="d-flex align-items-center justify-content-center">
                          <p className="fs-4 mb-0 fw-bold">
                            Already have an Account?
                          </p>
                          <a
                            className="text-primary fw-bold ms-2"
                            href="/login"
                          >
                            Sign In
                          </a>
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
  );
}

export default Register;
