// Dashboard.js
import React from 'react';

const Dashboard = ({ user }) => {
  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      {/* Dashboard content */}
    </div>
  );
};

export default Dashboard;
