import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

function UserProfile() {
  const [userData, setUserData] = useState({
    firstName: 'Umesh',
    middleName: '',
    lastName: 'Kumar',
    phoneNumber: '+91 9876543210',
    email: 'umesh.kumar@example.com',
    currentAddress: '123 Main Street, Mumbai, Maharashtra',
    permanentAddress: '123 Main Street, Mumbai, Maharashtra',
    maritalStatus: 'Single',
    gender: 'Male',
    dateOfBirth: '1990-05-15',
    aadhaarNumber: '1234-5678-9012',
    panCardNumber: 'ABCDE1234F',
    passportNumber: 'A1234567',
    fatherName: 'Rajesh Kumar',
    education: 'Bachelor of Engineering',
    occupationType: 'Salaried',
    employer: 'Tech Solutions Inc.',
    designation: 'Senior Software Engineer',
    workExperience: '8 years',
    officeAddress: 'Tech Park, Andheri East, Mumbai'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({ ...userData });

  const handleEditToggle = () => {
    if (isEditing) {
      setEditedData({ ...userData });
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    setUserData({ ...editedData });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedData({ ...userData });
    setIsEditing(false);
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div>
      <Header />
      
      <main className="container my-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1>My Profile</h1>
          <div>
            {!isEditing ? (
              <button className="btn btn-primary" onClick={handleEditToggle}>
                <i className="fas fa-edit me-2"></i> Edit Profile
              </button>
            ) : (
              <div>
                <button className="btn btn-success me-2" onClick={handleSave}>
                  <i className="fas fa-save me-2"></i> Save Changes
                </button>
                <button className="btn btn-outline-secondary" onClick={handleCancel}>
                  <i className="fas fa-times me-2"></i> Cancel
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Personal Information */}
        <div className="card dashboard-card mb-4">
          <div className="card-header">
            <i className="fas fa-user me-2"></i> Personal Information
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4 mb-3">
                <label className="form-label">First Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={editedData.firstName}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p className="form-control-plaintext">{userData.firstName}</p>
                )}
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Middle Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    className="form-control"
                    name="middleName"
                    value={editedData.middleName}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p className="form-control-plaintext">{userData.middleName || 'N/A'}</p>
                )}
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Last Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={editedData.lastName}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p className="form-control-plaintext">{userData.lastName}</p>
                )}
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Phone Number</label>
                {isEditing ? (
                  <input
                    type="tel"
                    className="form-control"
                    name="phoneNumber"
                    value={editedData.phoneNumber}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p className="form-control-plaintext">{userData.phoneNumber}</p>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Email Address</label>
                {isEditing ? (
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={editedData.email}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p className="form-control-plaintext">{userData.email}</p>
                )}
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Date of Birth</label>
                {isEditing ? (
                  <input
                    type="date"
                    className="form-control"
                    name="dateOfBirth"
                    value={editedData.dateOfBirth}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p className="form-control-plaintext">
                    {new Date(userData.dateOfBirth).toLocaleDateString()} 
                    (Age: {calculateAge(userData.dateOfBirth)})
                  </p>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Gender</label>
                {isEditing ? (
                  <select
                    className="form-select"
                    name="gender"
                    value={editedData.gender}
                    onChange={handleInputChange}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                ) : (
                  <p className="form-control-plaintext">{userData.gender}</p>
                )}
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Marital Status</label>
                {isEditing ? (
                  <select
                    className="form-select"
                    name="maritalStatus"
                    value={editedData.maritalStatus}
                    onChange={handleInputChange}
                  >
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                  </select>
                ) : (
                  <p className="form-control-plaintext">{userData.maritalStatus}</p>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Father's Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    className="form-control"
                    name="fatherName"
                    value={editedData.fatherName}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p className="form-control-plaintext">{userData.fatherName}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Address Information */}
        <div className="card dashboard-card mb-4">
          <div className="card-header">
            <i className="fas fa-home me-2"></i> Address Information
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Current Address</label>
                {isEditing ? (
                  <textarea
                    className="form-control"
                    name="currentAddress"
                    rows="3"
                    value={editedData.currentAddress}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p className="form-control-plaintext">{userData.currentAddress}</p>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Permanent Address</label>
                {isEditing ? (
                  <textarea
                    className="form-control"
                    name="permanentAddress"
                    rows="3"
                    value={editedData.permanentAddress}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p className="form-control-plaintext">{userData.permanentAddress}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Identity Documents */}
        <div className="card dashboard-card mb-4">
          <div className="card-header">
            <i className="fas fa-id-card me-2"></i> Identity Documents
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4 mb-3">
                <label className="form-label">Aadhaar Number</label>
                <p className="form-control-plaintext">{userData.aadhaarNumber}</p>
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">PAN Card Number</label>
                <p className="form-control-plaintext">{userData.panCardNumber}</p>
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Passport Number</label>
                <p className="form-control-plaintext">{userData.passportNumber || 'N/A'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Employment */}
        <div className="card dashboard-card mb-4">
          <div className="card-header">
            <i className="fas fa-briefcase me-2"></i> Education & Employment
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Education</label>
                {isEditing ? (
                  <input
                    type="text"
                    className="form-control"
                    name="education"
                    value={editedData.education}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p className="form-control-plaintext">{userData.education}</p>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Occupation Type</label>
                {isEditing ? (
                  <select
                    className="form-select"
                    name="occupationType"
                    value={editedData.occupationType}
                    onChange={handleInputChange}
                  >
                    <option value="Salaried">Salaried</option>
                    <option value="Self Employed">Self Employed</option>
                    <option value="Business">Business</option>
                  </select>
                ) : (
                  <p className="form-control-plaintext">{userData.occupationType}</p>
                )}
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Employer/Business Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    className="form-control"
                    name="employer"
                    value={editedData.employer}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p className="form-control-plaintext">{userData.employer}</p>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Designation</label>
                {isEditing ? (
                  <input
                    type="text"
                    className="form-control"
                    name="designation"
                    value={editedData.designation}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p className="form-control-plaintext">{userData.designation}</p>
                )}
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Total Work Experience</label>
                {isEditing ? (
                  <input
                    type="text"
                    className="form-control"
                    name="workExperience"
                    value={editedData.workExperience}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p className="form-control-plaintext">{userData.workExperience}</p>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Office Address</label>
                {isEditing ? (
                  <textarea
                    className="form-control"
                    name="officeAddress"
                    rows="2"
                    value={editedData.officeAddress}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p className="form-control-plaintext">{userData.officeAddress}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default UserProfile;