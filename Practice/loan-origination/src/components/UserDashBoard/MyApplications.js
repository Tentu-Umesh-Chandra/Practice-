import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

function MyApplications() {
  const [applications, setApplications] = useState([
    { id: '#LA-7845', type: 'Home Loan', amount: '₹25,00,000', date: '15 Mar 2025', status: 'pending' },
    { id: '#LA-7821', type: 'Personal Loan', amount: '₹5,00,000', date: '10 Mar 2025', status: 'approved' },
    { id: '#LA-7798', type: 'Vehicle Loan', amount: '₹8,50,000', date: '05 Mar 2025', status: 'submitted' },
    { id: '#LA-7754', type: 'Personal Loan', amount: '₹3,00,000', date: '28 Feb 2025', status: 'rejected' },
    { id: '#LA-7721', type: 'Home Loan', amount: '₹35,00,000', date: '20 Feb 2025', status: 'approved' }
  ]);

  const [stats, setStats] = useState({
    pending: 3,
    approved: 2,
    total: 5,
    rejected: 1
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentApplications = applications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(applications.length / itemsPerPage);

  return (
    <div>
      <Header />
      
      <main className="container my-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1>My Loan Applications</h1>
          <a href="#" className="btn btn-primary">
            <i className="fas fa-plus me-2"></i> Apply for New Loan
          </a>
        </div>

        <div className="card dashboard-card">
          <div className="card-header">
            All Loan Applications
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
                  {currentApplications.map((app, index) => (
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
                        <a href="#" className="btn btn-outline-primary btn-sm">View Details</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            <nav aria-label="Application pagination" className="mt-4">
              <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <a 
                    className="page-link" 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); handlePageChange(currentPage - 1); }}
                  >
                    Previous
                  </a>
                </li>
                {[...Array(totalPages)].map((_, index) => (
                  <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                    <a 
                      className="page-link" 
                      href="#"
                      onClick={(e) => { e.preventDefault(); handlePageChange(index + 1); }}
                    >
                      {index + 1}
                    </a>
                  </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  <a 
                    className="page-link" 
                    href="#"
                    onClick={(e) => { e.preventDefault(); handlePageChange(currentPage + 1); }}
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Application Stats */}
        <div className="row mt-4">
          <div className="col-md-3 mb-3">
            <div className="stat-card">
              <i className="fas fa-clock text-warning"></i>
              <h3>{stats.pending}</h3>
              <p>Pending Applications</p>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="stat-card">
              <i className="fas fa-check-circle text-success"></i>
              <h3>{stats.approved}</h3>
              <p>Approved Loans</p>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="stat-card">
              <i className="fas fa-file-invoice-dollar text-primary"></i>
              <h3>{stats.total}</h3>
              <p>Total Applications</p>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="stat-card">
              <i className="fas fa-times-circle text-danger"></i>
              <h3>{stats.rejected}</h3>
              <p>Rejected Applications</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default MyApplications;