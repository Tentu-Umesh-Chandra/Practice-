import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './UserDashboard.css';

function UserDashboard() {
  return (
    <div>
      <Header />
      
      <main className="container my-4">
        {/* Welcome Banner */}
        <div className="hero-banner">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h1>Welcome back, Umesh!</h1>
              <p>Manage your loan applications and track their status in one place.</p>
              <a href="#" className="btn btn-primary">
                <i className="fas fa-plus me-2"></i> Apply for New Loan
              </a>
            </div>
            <div className="col-md-4">
              <div className="bg-white rounded p-3 d-inline-block">
                <h4 className="text-primary mb-1">Cibil Score</h4>
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
                              <li><i className="fas fa-check text-success me-2"></i> Get up to ₹3 Cr*</li>
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
                              <li><i className="fas fa-check text-success me-2"></i> Get up to ₹35 Cr*</li>
                              <li><i className="fas fa-check text-success me-2"></i> Stating at 7.99%* PA</li>
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
                              <li><i className="fas fa-check text-success me-2"></i> Get up to ₹2 Cr*</li>
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
                        <td>15 Mar 2025</td>
                        <td><span className="status-badge status-pending">Pending</span></td>
                        <td>
                          <a href="#" className="btn btn-outline-primary btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>#LA-7821</td>
                        <td>Personal Loan</td>
                        <td>₹5,00,000</td>
                        <td>10 Mar 2025</td>
                        <td><span className="status-badge status-approved">Approved</span></td>
                        <td>
                          <a href="#" className="btn btn-outline-primary btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>#LA-7798</td>
                        <td>Vehicle Loan</td>
                        <td>₹8,50,000</td>
                        <td>05 Mar 2025</td>
                        <td><span className="status-badge status-submitted">Submitted</span></td>
                        <td>
                          <a href="#" className="btn btn-outline-primary btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>#LA-7754</td>
                        <td>Personal Loan</td>
                        <td>₹3,00,000</td>
                        <td>28 Feb 2025</td>
                        <td><span className="status-badge status-rejected">Rejected</span></td>
                        <td>
                          <a href="#" className="btn btn-outline-primary btn-sm">View</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="text-center mt-3">
                  <a href="/my-applications" className="btn btn-outline-primary">View All Applications</a>
                </div>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="col-md-4">
            <div className="card dashboard-card">
              <div className="card-header d-flex justify-content-between align-items-center">
                Recent Notifications
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
                <div className="p-3 text-center">
                  <a href="/notifications" className="btn btn-outline-primary btn-sm">View All Notifications</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default UserDashboard;