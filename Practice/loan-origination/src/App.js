import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import UserDashboardRoutes from './routes/UserDashboardRoutes';

function App() {
  return (
    <BrowserRouter>
      <UserDashboardRoutes />
    </BrowserRouter>
  );
}

export default App;