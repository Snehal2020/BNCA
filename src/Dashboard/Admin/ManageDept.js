// Dashboard.js
import React from 'react';
import Layout from '../../Components/Layout1/Layout';
import '../Admin/Admin.css';
const ManageDept = () => {
  return (
 <Layout>

  <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
    {/* Sidebar Start */}
    <aside className="left-sidebar">
      {/* Sidebar scroll*/}
      <div>
        <div className="brand-logo d-flex align-items-center justify-content-between">
          <a href="./index.html" className="text-nowrap logo-img">
            <img src="/assets/images/logos/dark-logo.svg" width={180} alt />
          </a>
          <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
            <i className="ti ti-x fs-8" />
          </div>
        </div>
        {/* Sidebar navigation*/}
        <nav className="sidebar-nav scroll-sidebar" data-simplebar>
          <ul id="sidebarnav">
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Home</span>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="/" aria-expanded="false">
                <span>
                  <i className="ti ti-layout-dashboard" />
                </span>
                <span className="hide-menu">Dashboard</span>
              </a>
            </li>
            {/* <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">UI COMPONENTS</span>
            </li> */}
            <li className="sidebar-item">
              <a className="sidebar-link" href="/dashboard/admin/department" aria-expanded="false">
                <span>
                  <i className="ti ti-article" />
                </span>
                <span className="hide-menu">Manage Department</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="./ui-alerts.html" aria-expanded="false">
                <span>
                  <i className="ti ti-alert-circle" />
                </span>
                <span className="hide-menu">Manage Course</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="./ui-card.html" aria-expanded="false">
                <span>
                  <i className="ti ti-cards" />
                </span>
                <span className="hide-menu">Card</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="./ui-forms.html" aria-expanded="false">
                <span>
                  <i className="ti ti-file-description" />
                </span>
                <span className="hide-menu">Forms</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="./ui-typography.html" aria-expanded="false">
                <span>
                  <i className="ti ti-typography" />
                </span>
                <span className="hide-menu">Typography</span>
              </a>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">AUTH</span>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="./authentication-login.html" aria-expanded="false">
                <span>
                  <i className="ti ti-login" />
                </span>
                <span className="hide-menu">Login</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="./authentication-register.html" aria-expanded="false">
                <span>
                  <i className="ti ti-user-plus" />
                </span>
                <span className="hide-menu">Register</span>
              </a>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">EXTRA</span>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="./icon-tabler.html" aria-expanded="false">
                <span>
                  <i className="ti ti-mood-happy" />
                </span>
                <span className="hide-menu">Icons</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="./sample-page.html" aria-expanded="false">
                <span>
                  <i className="ti ti-aperture" />
                </span>
                <span className="hide-menu">Sample Page</span>
              </a>
            </li>
          </ul>
          <div className="unlimited-access hide-menu bg-light-primary position-relative mb-7 mt-5 rounded">
            <div className="d-flex">
              <div className="unlimited-access-title me-3">
                <h6 className="fw-semibold fs-4 mb-6 text-dark w-85">Upgrade to pro</h6>
                <a href="https://adminmart.com/product/modernize-bootstrap-5-admin-template/" target="_blank" className="btn btn-primary fs-2 fw-semibold lh-sm">Buy Pro</a>
              </div>
              <div className="unlimited-access-img">
                <img src="../assets/images/backgrounds/rocket.png" alt className="img-fluid" />
              </div>
            </div>
          </div>
        </nav>
        {/* End Sidebar navigation */}
      </div>
      {/* End Sidebar scroll*/}
    </aside>
    {/*  Sidebar End */}
    {/*  Main wrapper */}
    <div className="body-wrapper">
      {/*  Header Start */}
      {/* <header className="app-header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item d-block d-xl-none">
              <a className="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" href="javascript:void(0)">
                <i className="ti ti-menu-2" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-icon-hover" href="javascript:void(0)">
                <i className="ti ti-bell-ringing" />
                <div className="notification bg-primary rounded-circle" />
              </a>
            </li>
          </ul>
          <div className="navbar-collapse justify-content-end px-0" id="navbarNav">
            <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
              <a href="https://adminmart.com/product/modernize-free-bootstrap-admin-dashboard/" target="_blank" className="btn btn-primary">Download Free</a>
              <li className="nav-item dropdown">
                <a className="nav-link nav-icon-hover" href="javascript:void(0)" id="drop2" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="../assets/images/profile/user-1.jpg" alt width={35} height={35} className="rounded-circle" />
                </a>
                <div className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop2">
                  <div className="message-body">
                    <a href="javascript:void(0)" className="d-flex align-items-center gap-2 dropdown-item">
                      <i className="ti ti-user fs-6" />
                      <p className="mb-0 fs-3">My Profile</p>
                    </a>
                    <a href="javascript:void(0)" className="d-flex align-items-center gap-2 dropdown-item">
                      <i className="ti ti-mail fs-6" />
                      <p className="mb-0 fs-3">My Account</p>
                    </a>
                    <a href="javascript:void(0)" className="d-flex align-items-center gap-2 dropdown-item">
                      <i className="ti ti-list-check fs-6" />
                      <p className="mb-0 fs-3">My Task</p>
                    </a>
                    <a href="./authentication-login.html" className="btn btn-outline-primary mx-3 mt-2 d-block">Logout</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header> */}
      {/*  Header End */}
      {/* <div className="container-fluid">
        <div className="card w-100 h-100 position-relative overflow-hidden">
          <div className="card-body">
            <h5 className="card-title fw-semibold mb-4">Icons</h5>
            <iframe src="https://tabler-icons.io/" frameBorder={0} style={{height: 'calc(100vh - 250px)', width: '100%'}} data-simplebar />
          </div>
        </div>
      </div> */}
    </div>
  </div>

    </Layout>
  );
};



export default ManageDept;
