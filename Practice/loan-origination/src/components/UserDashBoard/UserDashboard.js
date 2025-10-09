import React from 'react';
import './UserDashboard.css';

const UserDashboard = () => {
  return (
    <div>
      {/* Header */}
      <header className="sc-header sticky-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg sc-navbar">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src="loan-origination\src\assets\images\SCBLo.png" alt="SCBLogo" className="sc-logo" />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <a className="nav-link active" href="#"><i className="fas fa-tachometer-alt me-1"></i> Dashboard</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><i className="fas fa-file-alt me-1"></i> My Applications</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="loansDropdown" role="button" data-bs-toggle="dropdown">
                      <i className="fas fa-hand-holding-usd me-1"></i> Apply for Loan
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Personal Loan</a></li>
                      <li><a className="dropdown-item" href="#">Home Loan</a></li>
                      <li><a className="dropdown-item" href="#">Vehicle Loan</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><i className="fas fa-history me-1"></i> Application History</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><i className="fas fa-question-circle me-1"></i> Help & Support</a>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item position-relative">
                    <a className="nav-link" href="#">
                      <i className="fas fa-bell"></i>
                      <span className="notification-badge">3</span>
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown">
                      <i className="fas fa-user-circle me-1"></i> John Doe
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li><a className="dropdown-item" href="#"><i className="fas fa-user me-2"></i>Profile</a></li>
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

      {/* Main Content */}
      <main className="container my-4">
        {/* Welcome Banner */}
        <div className="hero-banner">
          <div className="row align-items-center">
            <div className="col-md-8 text-center">
              <h1>Welcome back, John!</h1>
              <p>Manage your loan applications and track their status in one place.</p>
              <a href="#" className="btn btn-primary">
                <i className="fas fa-plus me-2"></i> Apply for New Loan
              </a>
            </div>
            <div className="col-md-4 text-center">
              <div className="bg-white rounded p-3 d-inline-block">
                <h4 className="text-primary mb-1">Credit Score</h4>
                <h2 className="text-dark mb-0">780</h2>
                <small className="text-success">Excellent</small>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="row mb-4">
          <div className="col-md-3 mb-3">
            <div className="stat-card">
              <i className="fas fa-clock text-warning"></i>
              <h3>3</h3>
              <p>Pending Applications</p>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="stat-card">
              <i className="fas fa-check-circle text-success"></i>
              <h3>2</h3>
              <p>Approved Loans</p>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="stat-card">
              <i className="fas fa-file-invoice-dollar text-primary"></i>
              <h3>5</h3>
              <p>Total Applications</p>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="stat-card">
              <i className="fas fa-chart-line text-info"></i>
              <h3>₹38.5L</h3>
              <p>Total Loan Amount</p>
            </div>
          </div>
        </div>

        {/* Available Loan Types */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="card dashboard-card">
              <div className="card-header">
                Available Loan Types
              </div>
              <div className="card-body">
                <div className="row">
                  {/* Personal Loan Card */}
                  <div className="col-md-4 mb-3">
                    <div className="card loan-type-card personal h-100">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-start">
                          <div>
                            <h5 className="card-title">Personal Loan</h5>
                            <p className="card-text">Get funds for your personal needs with flexible repayment options.</p>
                            <ul className="list-unstyled">
                              <li><i className="fas fa-check text-success me-2"></i> Up to ₹25 Lakhs</li>
                              <li><i className="fas fa-check text-success me-2"></i> Quick Approval</li>
                              <li><i className="fas fa-check text-success me-2"></i> Minimal Documentation</li>
                            </ul>
                          </div>
                          <i className="fas fa-user fa-2x text-primary"></i>
                        </div>
                        <div className="mt-3">
                          <a href="#" className="btn btn-primary w-100">Apply Now</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Home Loan Card */}
                  <div className="col-md-4 mb-3">
                    <div className="card loan-type-card home h-100">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-start">
                          <div>
                            <h5 className="card-title">Home Loan</h5>
                            <p className="card-text">Realize your dream of owning a home with our attractive home loan offers.</p>
                            <ul className="list-unstyled">
                              <li><i className="fas fa-check text-success me-2"></i> Up to ₹5 Crores</li>
                              <li><i className="fas fa-check text-success me-2"></i> Low Interest Rates</li>
                              <li><i className="fas fa-check text-success me-2"></i> Long Tenure</li>
                            </ul>
                          </div>
                          <span className="slanted-gradient">
                            <i className="fa-solid fa-house fa-2x"></i>
                          </span>
                        </div>
                        <div className="mt-3">
                          <a href="#" className="btn btn-primary w-100">Apply Now</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Vehicle Loan Card */}
                  <div className="col-md-4 mb-3">
                    <div className="card loan-type-card vehicle h-100">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-start">
                          <div>
                            <h5 className="card-title">Vehicle Loan</h5>
                            <p className="card-text">Drive home your dream car with our easy vehicle financing options.</p>
                            <ul className="list-unstyled">
                              <li><i className="fas fa-check text-success me-2"></i> Up to ₹50 Lakhs</li>
                              <li><i className="fas fa-check text-success me-2"></i> 100% On-road Funding</li>
                              <li><i className="fas fa-check text-success me-2"></i> Fast Processing</li>
                            </ul>
                          </div>
                          <i className="fas fa-car fa-2x text-success"></i>
                        </div>
                        <div className="mt-3">
                          <a href="#" className="btn btn-primary w-100">Apply Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Applications and Notifications */}
        <div className="row mt-4">
          {/* Recent Applications */}
          <div className="col-md-8">
            <div className="card dashboard-card">
              <div className="card-header">
                Recent Loan Applications
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Application ID</th>
                        <th>Loan Type</th>
                        <th>Amount</th>
                        <th>Applied Date</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#LA-7845</td>
                        <td>Home Loan</td>
                        <td>₹25,00,000</td>
                        <td>15 Mar 2023</td>
                        <td><span className="status-badge status-pending">Pending</span></td>
                        <td>
                          <a href="#" className="btn btn-outline-primary btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>#LA-7821</td>
                        <td>Personal Loan</td>
                        <td>₹5,00,000</td>
                        <td>10 Mar 2023</td>
                        <td><span className="status-badge status-approved">Approved</span></td>
                        <td>
                          <a href="#" className="btn btn-outline-primary btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>#LA-7798</td>
                        <td>Vehicle Loan</td>
                        <td>₹8,50,000</td>
                        <td>05 Mar 2023</td>
                        <td><span className="status-badge status-submitted">Submitted</span></td>
                        <td>
                          <a href="#" className="btn btn-outline-primary btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>#LA-7754</td>
                        <td>Personal Loan</td>
                        <td>₹3,00,000</td>
                        <td>28 Feb 2023</td>
                        <td><span className="status-badge status-rejected">Rejected</span></td>
                        <td>
                          <a href="#" className="btn btn-outline-primary btn-sm">View</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="text-center mt-3">
                  <a href="#" className="btn btn-outline-primary">View All Applications</a>
                </div>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="col-md-4">
            <div className="card dashboard-card">
              <div className="card-header d-flex justify-content-between align-items-center">
                Notifications
                <span className="badge bg-danger">3 New</span>
              </div>
              <div className="card-body p-0">
                <div className="list-group list-group-flush">
                  <div className="notification-item unread">
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-1">Application Update</h6>
                      <small>2 hours ago</small>
                    </div>
                    <p className="mb-1">Your home loan application #LA-7845 is under review.</p>
                  </div>
                  <div className="notification-item unread">
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-1">Document Required</h6>
                      <small>1 day ago</small>
                    </div>
                    <p className="mb-1">Please upload your latest salary slip for application #LA-7798.</p>
                  </div>
                  <div className="notification-item unread">
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-1">Loan Approved</h6>
                      <small>3 days ago</small>
                    </div>
                    <p className="mb-1">Your personal loan application #LA-7821 has been approved.</p>
                  </div>
                  <div className="notification-item">
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-1">Welcome</h6>
                      <small>1 week ago</small>
                    </div>
                    <p className="mb-1">Welcome to Standard Chartered Loan Portal.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="sc-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-4 mb-md-0">
              <div className="footer-section">
                <h5>About Us</h5>
                <p>We're a leading international banking group, with a presence in some of the world's most dynamic markets.</p>
                <div className="social-icons">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4 mb-md-0">
              <div className="footer-section">
                <h5>Products</h5>
                <a href="#">Personal Loans</a>
                <a href="#">Home Loans</a>
                <a href="#">Vehicle Loans</a>
                <a href="#">Credit Cards</a>
                <a href="#">Savings Accounts</a>
              </div>
            </div>
            <div className="col-md-3 mb-4 mb-md-0">
              <div className="footer-section">
                <h5>Support</h5>
                <a href="#">Contact Us</a>
                <a href="#">FAQs</a>
                <a href="#">Branch Locator</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-section">
                <h5>Contact Information</h5>
                <p><i className="fas fa-map-marker-alt me-2"></i> Standard Chartered Tower, India</p>
                <p><i className="fas fa-phone me-2"></i> +91 90000 90000</p>
                <p><i className="fas fa-envelope me-2"></i> support@sc.com</p>
              </div>
            </div>
          </div>
          <div className="row copyright">
            <div className="col-md-6">
              <p>&copy; 2025 Standard Chartered Bank. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="footer-links">
                <a href="#">Terms of Use</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Security</a>
                <a href="#">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UserDashboard;