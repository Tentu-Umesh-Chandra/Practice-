import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Notifications() {
  return (
    <div>
      <Header />
      
      <main className="container my-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1>Notifications</h1>
          <div>
            <button className="btn btn-outline-primary me-2">
              <i className="fas fa-check-double me-2"></i> Mark All as Read
            </button>
            <button className="btn btn-outline-danger">
              <i className="fas fa-trash me-2"></i> Clear All
            </button>
          </div>
        </div>

        <div className="card dashboard-card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <span>All Notifications</span>
            <span className="badge bg-danger">3 Unread</span>
          </div>
          <div className="card-body p-0">
            <div className="list-group list-group-flush">
              {/* Unread Notifications */}
              <div className="notification-item unread">
                <div className="d-flex w-100 justify-content-between align-items-start">
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h6 className="mb-0 text-primary">Application Update</h6>
                      <small className="text-muted">2 hours ago</small>
                    </div>
                    <p className="mb-1">Your home loan application #LA-7845 is under review by our verification team.</p>
                    <div className="mt-2">
                      <a href="#" className="btn btn-sm btn-outline-primary me-2">View Application</a>
                      <button className="btn btn-sm btn-outline-secondary">Mark as Read</button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="notification-item unread">
                <div className="d-flex w-100 justify-content-between align-items-start">
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h6 className="mb-0 text-primary">Document Required</h6>
                      <small className="text-muted">1 day ago</small>
                    </div>
                    <p className="mb-1">Please upload your latest salary slip for application #LA-7798 to proceed with verification.</p>
                    <div className="mt-2">
                      <a href="#" className="btn btn-sm btn-outline-primary me-2">Upload Documents</a>
                      <button className="btn btn-sm btn-outline-secondary">Mark as Read</button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="notification-item unread">
                <div className="d-flex w-100 justify-content-between align-items-start">
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h6 className="mb-0 text-success">Loan Approved</h6>
                      <small className="text-muted">3 days ago</small>
                    </div>
                    <p className="mb-1">Congratulations! Your personal loan application #LA-7821 has been approved. Funds will be disbursed within 24 hours.</p>
                    <div className="mt-2">
                      <a href="#" className="btn btn-sm btn-outline-primary me-2">View Details</a>
                      <button className="btn btn-sm btn-outline-secondary">Mark as Read</button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Read Notifications */}
              <div className="notification-item">
                <div className="d-flex w-100 justify-content-between align-items-start">
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h6 className="mb-0">Application Submitted</h6>
                      <small className="text-muted">1 week ago</small>
                    </div>
                    <p className="mb-1">Your vehicle loan application #LA-7798 has been successfully submitted and is awaiting verification.</p>
                  </div>
                </div>
              </div>
              
              <div className="notification-item">
                <div className="d-flex w-100 justify-content-between align-items-start">
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h6 className="mb-0">Welcome</h6>
                      <small className="text-muted">2 weeks ago</small>
                    </div>
                    <p className="mb-1">Welcome to Standard Chartered Loan Portal. We're glad to have you onboard!</p>
                  </div>
                </div>
              </div>
              
              <div className="notification-item">
                <div className="d-flex w-100 justify-content-between align-items-start">
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h6 className="mb-0">Profile Updated</h6>
                      <small className="text-muted">3 weeks ago</small>
                    </div>
                    <p className="mb-1">Your profile information has been successfully updated.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="card dashboard-card">
              <div className="card-header">
                <i className="fas fa-cog me-2"></i> Notification Settings
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-check form-switch mb-3">
                      <input className="form-check-input" type="checkbox" id="emailNotifications" defaultChecked />
                      <label className="form-check-label" htmlFor="emailNotifications">
                        Email Notifications
                      </label>
                    </div>
                    <div className="form-check form-switch mb-3">
                      <input className="form-check-input" type="checkbox" id="smsNotifications" defaultChecked />
                      <label className="form-check-label" htmlFor="smsNotifications">
                        SMS Notifications
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-check form-switch mb-3">
                      <input className="form-check-input" type="checkbox" id="applicationUpdates" defaultChecked />
                      <label className="form-check-label" htmlFor="applicationUpdates">
                        Application Status Updates
                      </label>
                    </div>
                    <div className="form-check form-switch mb-3">
                      <input className="form-check-input" type="checkbox" id="promotional" />
                      <label className="form-check-label" htmlFor="promotional">
                        Promotional Offers
                      </label>
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary mt-2">Save Settings</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Notifications;