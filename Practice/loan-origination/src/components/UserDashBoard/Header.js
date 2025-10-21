import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import scbLogo from '../../assets/images/ScbLogo.png';

function Header() {
  const location = useLocation();

  return (
    <header className="sc-header sticky-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg sc-navbar">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/dashboard">
              <img src={scbLogo} alt="SCBLogo" className="sc-logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link 
                    className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`} 
                    to="/dashboard"
                  >
                    <i className="fas fa-tachometer-alt me-1"></i> Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    className={`nav-link ${location.pathname === '/my-applications' ? 'active' : ''}`} 
                    to="/my-applications"
                  >
                    <i className="fas fa-file-alt me-1"></i> My Applications
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="loansDropdown" role="button" data-bs-toggle="dropdown">
                    <i className="fas fa-hand-holding-usd me-1"></i> Apply for Loan
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#"><i className="fas fa-user me-2"></i>Personal Loan</a></li>
                    <li><a className="dropdown-item" href="#"><i className="fas fa-home me-2"></i>Home Loan</a></li>
                    <li><a className="dropdown-item" href="#"><i className="fas fa-car me-2"></i>Vehicle Loan</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link 
                    className={`nav-link ${location.pathname === '/help-support' ? 'active' : ''}`} 
                    to="/help-support"
                  >
                    <i className="fas fa-question-circle me-1"></i> Help & Support
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item position-relative">
                  <Link 
                    className={`nav-link ${location.pathname === '/notifications' ? 'active' : ''}`} 
                    to="/notifications"
                  >
                    <i className="fas fa-bell"></i>
                    <span className="notification-badge">3</span>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown">
                    <i className="fas fa-user-circle me-1"></i> Umesh
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        <i className="fas fa-user me-2"></i>Profile
                      </Link>
                    </li>
                    <li><a className="dropdown-item" href="#"><i className="fas fa-cog me-2"></i>Settings</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#"><i className="fas fa-sign-out-alt me-2"></i>Logout</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;