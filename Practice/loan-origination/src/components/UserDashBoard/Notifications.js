import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

function Notifications() {
  const [notifications, setNotifications] = useState([
    { 
      id: 1, 
      title: 'Application Update', 
      message: 'Your home loan application #LA-7845 is under review by our verification team.', 
      time: '2 hours ago', 
      unread: true,
      type: 'info'
    },
    { 
      id: 2, 
      title: 'Document Required', 
      message: 'Please upload your latest salary slip for application #LA-7798 to proceed with verification.', 
      time: '1 day ago', 
      unread: true,
      type: 'warning'
    },
    { 
      id: 3, 
      title: 'Loan Approved', 
      message: 'Congratulations! Your personal loan application #LA-7821 has been approved. Funds will be disbursed within 24 hours.', 
      time: '3 days ago', 
      unread: true,
      type: 'success'
    },
    { 
      id: 4, 
      title: 'Application Submitted', 
      message: 'Your vehicle loan application #LA-7798 has been successfully submitted and is awaiting verification.', 
      time: '1 week ago', 
      unread: false,
      type: 'info'
    },
    { 
      id: 5, 
      title: 'Welcome', 
      message: 'Welcome to Standard Chartered Loan Portal. We\'re glad to have you onboard!', 
      time: '2 weeks ago', 
      unread: false,
      type: 'info'
    },
    { 
      id: 6, 
      title: 'Profile Updated', 
      message: 'Your profile information has been successfully updated.', 
      time: '3 weeks ago', 
      unread: false,
      type: 'info'
    }
  ]);

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    smsNotifications: true,
    applicationUpdates: true,
    promotional: false
  });

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({
      ...notification,
      unread: false
    })));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, unread: false } : notification
    ));
  };

  const handleSettingChange = (setting) => {
    setNotificationSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const saveSettings = () => {
    // In a real app, this would save to backend
    alert('Notification settings saved successfully!');
  };

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <div>
      <Header />
      
      <main className="container my-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1>Notifications</h1>
          <div>
            <button className="btn btn-outline-primary me-2" onClick={markAllAsRead}>
              <i className="fas fa-check-double me-2"></i> Mark All as Read
            </button>
            <button className="btn btn-outline-danger" onClick={clearAll}>
              <i className="fas fa-trash me-2"></i> Clear All
            </button>
          </div>
        </div>

        <div className="card dashboard-card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <span>All Notifications</span>
            <span className="badge bg-danger">{unreadCount} Unread</span>
          </div>
          <div className="card-body p-0">
            <div className="list-group list-group-flush">
              {notifications.map((notification) => (
                <div key={notification.id} className={`notification-item ${notification.unread ? 'unread' : ''}`}>
                  <div className="d-flex w-100 justify-content-between align-items-start">
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <h6 className={`mb-0 ${
                          notification.type === 'success' ? 'text-success' : 
                          notification.type === 'warning' ? 'text-warning' : 'text-primary'
                        }`}>
                          {notification.title}
                        </h6>
                        <small className="text-muted">{notification.time}</small>
                      </div>
                      <p className="mb-1">{notification.message}</p>
                      <div className="mt-2">
                        <a href="#" className="btn btn-sm btn-outline-primary me-2">
                          {notification.title.includes('Application') ? 'View Application' : 
                           notification.title.includes('Document') ? 'Upload Documents' : 'View Details'}
                        </a>
                        {notification.unread && (
                          <button 
                            className="btn btn-sm btn-outline-secondary" 
                            onClick={() => markAsRead(notification.id)}
                          >
                            Mark as Read
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="emailNotifications" 
                        checked={notificationSettings.emailNotifications}
                        onChange={() => handleSettingChange('emailNotifications')}
                      />
                      <label className="form-check-label" htmlFor="emailNotifications">
                        Email Notifications
                      </label>
                    </div>
                    <div className="form-check form-switch mb-3">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="smsNotifications" 
                        checked={notificationSettings.smsNotifications}
                        onChange={() => handleSettingChange('smsNotifications')}
                      />
                      <label className="form-check-label" htmlFor="smsNotifications">
                        SMS Notifications
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-check form-switch mb-3">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="applicationUpdates" 
                        checked={notificationSettings.applicationUpdates}
                        onChange={() => handleSettingChange('applicationUpdates')}
                      />
                      <label className="form-check-label" htmlFor="applicationUpdates">
                        Application Status Updates
                      </label>
                    </div>
                    <div className="form-check form-switch mb-3">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="promotional" 
                        checked={notificationSettings.promotional}
                        onChange={() => handleSettingChange('promotional')}
                      />
                      <label className="form-check-label" htmlFor="promotional">
                        Promotional Offers
                      </label>
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary mt-2" onClick={saveSettings}>
                  Save Settings
                </button>
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