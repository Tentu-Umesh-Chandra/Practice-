import React from 'react';
import Header from './Header';
import Footer from './Footer';

function MyApplications() {
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
                  <tr>
                    <td>#LA-7845</td>
                    <td>Home Loan</td>
                    <td>₹25,00,000</td>
                    <td>15 Mar 2025</td>
                    <td><span className="status-badge status-pending">Pending</span></td>
                    <td>
                      <a href="#" className="btn btn-outline-primary btn-sm">View Details</a>
                    </td>
                  </tr>
                  <tr>
                    <td>#LA-7821</td>
                    <td>Personal Loan</td>
                    <td>₹5,00,000</td>
                    <td>10 Mar 2025</td>
                    <td><span className="status-badge status-approved">Approved</span></td>
                    <td>
                      <a href="#" className="btn btn-outline-primary btn-sm">View Details</a>
                    </td>
                  </tr>
                  <tr>
                    <td>#LA-7798</td>
                    <td>Vehicle Loan</td>
                    <td>₹8,50,000</td>
                    <td>05 Mar 2025</td>
                    <td><span className="status-badge status-submitted">Submitted</span></td>
                    <td>
                      <a href="#" className="btn btn-outline-primary btn-sm">View Details</a>
                    </td>
                  </tr>
                  <tr>
                    <td>#LA-7754</td>
                    <td>Personal Loan</td>
                    <td>₹3,00,000</td>
                    <td>28 Feb 2025</td>
                    <td><span className="status-badge status-rejected">Rejected</span></td>
                    <td>
                      <a href="#" className="btn btn-outline-primary btn-sm">View Details</a>
                    </td>
                  </tr>
                  <tr>
                    <td>#LA-7721</td>
                    <td>Home Loan</td>
                    <td>₹35,00,000</td>
                    <td>20 Feb 2025</td>
                    <td><span className="status-badge status-approved">Approved</span></td>
                    <td>
                      <a href="#" className="btn btn-outline-primary btn-sm">View Details</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            <nav aria-label="Application pagination" className="mt-4">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex="-1">Previous</a>
                </li>
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                  <a className="page-link" href="#">Next</a>
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
              <i className="fas fa-times-circle text-danger"></i>
              <h3>1</h3>
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