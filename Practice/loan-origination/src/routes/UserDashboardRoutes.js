import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserDashboard from '../components/UserDashBoard/UserDashboard';
import MyApplications from '../components/UserDashBoard/MyApplications';
import HelpSupport from '../components/UserDashBoard/HelpSupport';
import Notifications from '../components/UserDashBoard/Notifications';

function UserDashboardRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/my-applications" element={<MyApplications />} />
      <Route path="/help-support" element={<HelpSupport />} />
      <Route path="/notifications" element={<Notifications />} />
      {/* Default route */}
      <Route path="/" element={<UserDashboard />} />
    </Routes>
  );
}

export default UserDashboardRoutes;