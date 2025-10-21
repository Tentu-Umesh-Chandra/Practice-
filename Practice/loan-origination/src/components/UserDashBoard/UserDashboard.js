import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import './UserDashboard.css';

function UserDashboard() {
  const [dashboardData, setDashboardData] = useState({
    userName: 'Umesh',
    cibilScore: 780,
    pendingApplications: 3,
    approvedLoans: 2,
    totalApplications: 5,
    totalLoanAmount: '₹38.5L'
  });

  const [applications, setApplications] = useState([
    { id: '#LA-7845', type: 'Home Loan', amount: '₹25,00,000', date: '15 Mar 2025', status: 'pending' },
    { id: '#LA-7821', type: 'Personal Loan', amount: '₹5,00,000', date: '10 Mar 2025', status: 'approved' },
    { id: '#LA-7798', type: 'Vehicle Loan', amount: '₹8,50,000', date: '05 Mar 2025', status: 'submitted' },
    { id: '#LA-7754', type: 'Personal Loan', amount: '₹3,00,000', date: '28 Feb 2025', status: 'rejected' }
  ]);

  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Application Update', message: 'Your home loan application #LA-7845 is under review.', time: '2 hours ago', unread: true },
    { id: 2, title: 'Document Required', message: 'Please upload your latest salary slip for application #LA-7798.', time: '1 day ago', unread: true },
    { id: 3, title: 'Loan Approved', message: 'Your personal loan application #LA-7821 has been approved.', time: '3 days ago', unread: true },
    { id: 4, title: 'Welcome', message: 'Welcome to Standard Chartered Loan Portal.', time: '1 week ago', unread: false }
  ]);

  const [loanTypes] = useState([
    {
      type: 'personal',
      title: 'Personal Loan',
      description: 'Get funds for your personal needs with flexible repayment options.',
      features: ['Get up to ₹3 Cr*', 'Quick Approval', 'Minimal Documentation'],
      icon: 'fas fa-user'
    },
    {
      type: 'home',
      title: 'Home Loan',
      description: 'Realize your dream of owning a home with our attractive home loan offers.',
      features: ['Get up to ₹35 Cr*', 'Stating at 7.99%* PA', 'Long Tenure'],
      icon: 'fa-solid fa-house'
    },
    {
      type: 'vehicle',
      title: 'Vehicle Loan',
      description: 'Drive home your dream car with our easy vehicle financing options.',
      features: ['Get up to ₹2 Cr*', '100% On-road Funding', 'Fast Processing'],
      icon: 'fas fa-car'
    }
  ]);

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'pending': return 'status-pending';
      case 'approved': return 'status-approved';
      case 'submitted': return 'status-submitted';
      case 'rejected': return 'status-rejected';
      default: return 'status-pending';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'pending': return 'Pending';
      case 'approved': return 'Approved';
      case 'submitted': return 'Submitted';
      case 'rejected': return 'Rejected';
      default: return 'Pending';
    }
  };

  const unreadNotificationsCount = notifications.filter(notification => notification.unread).length;

  return (
    <div>
      <Header />
      
      <main className="container my-4">
        {/* Welcome Banner */}
        <div className="hero-banner">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h1>Welcome back, {dashboardData.userName}!</h1>
              <p>Manage your loan applications and track their status in one place.</p>
              <a href="#" className="btn btn-primary">
                <i className="fas fa-plus me-2"></i> Apply for New Loan
              </a>
            </div>
            <div className="col-md-4">
              <div className="bg-white rounded p-3 d-inline-block">
                <h4 className="text-primary mb-1">Cibil Score</h4>
                <h2 className="text-dark mb-0">{dashboardData.cibilScore}</h2>
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
              <h3>{dashboardData.pendingApplications}</h3>
              <p>Pending Applications</p>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="stat-card">
              <i className="fas fa-check-circle text-success"></i>
              <h3>{dashboardData.approvedLoans}</h3>
              <p>Approved Loans</p>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="stat-card">
              <i className="fas fa-file-invoice-dollar text-primary"></i>
              <h3>{dashboardData.totalApplications}</h3>
              <p>Total Applications</p>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="stat-card">
              <i className="fas fa-chart-line text-info"></i>
              <h3>{dashboardData.totalLoanAmount}</h3>
              <p>Total Loan Amount</p>
            </div>
          </div>
        </div>

        {/* Available Loan Types */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="card dashboard-card">
              <div className="card-header">
                <h4>Available Loan Types</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  {loanTypes.map((loan, index) => (
                    <div key={index} className="col-md-4 mb-3">
                      <div className={`card loan-type-card ${loan.type} h-100`}>
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-start">
                            <div>
                              <h5 className="card-title">{loan.title}</h5>
                              <p className="card-text">{loan.description}</p>
                              <ul className="list-unstyled">
                                {loan.features.map((feature, idx) => (
                                  <li key={idx}>
                                    <i className="fas fa-check text-success me-2"></i> {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            {loan.type === 'home' ? (
                              <span className="slanted-gradient">
                                <i className={`${loan.icon} fa-2x`}></i>
                              </span>
                            ) : (
                              <i className={`${loan.icon} fa-2x text-${loan.type === 'personal' ? 'primary' : 'success'}`}></i>
                            )}
                          </div>
                          <div className="mt-3">
                            <a href="#" className="btn btn-primary w-100">Apply Now</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
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
                <h4>Recent Loan Applications</h4>
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
                      {applications.map((app, index) => (
                        <tr key={index}>
                          <td>{app.id}</td>
                          <td>{app.type}</td>
                          <td>{app.amount}</td>
                          <td>{app.date}</td>
                          <td>
                            <span className={`status-badge ${getStatusBadgeClass(app.status)}`}>
                              {getStatusText(app.status)}
                            </span>
                          </td>
                          <td>
                            <a href="#" className="btn btn-outline-primary btn-sm">View</a>
                          </td>
                        </tr>
                      ))}
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
                <span className="badge bg-danger">{unreadNotificationsCount} New</span>
              </div>
              <div className="card-body p-0">
                <div className="list-group list-group-flush">
                  {notifications.slice(0, 4).map((notification, index) => (
                    <div key={notification.id} className={`notification-item ${notification.unread ? 'unread' : ''}`}>
                      <div className="d-flex w-100 justify-content-between">
                        <h6 className="mb-1">{notification.title}</h6>
                        <small>{notification.time}</small>
                      </div>
                      <p className="mb-1">{notification.message}</p>
                    </div>
                  ))}
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