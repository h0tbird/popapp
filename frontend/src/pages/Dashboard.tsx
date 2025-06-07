import { FunctionalComponent } from 'preact';
import { useAuth } from '../contexts/AuthContext';

const Dashboard: FunctionalComponent = () => {
  const { currentUser } = useAuth();
  
  if (!currentUser) {
    return <div>Please log in to view the dashboard.</div>;
  }
  
  return (
    <div class="page dashboard-page">
      <h1>Dashboard</h1>
      <p>Welcome back, {currentUser.displayName || currentUser.email}!</p>
      <div class="dashboard-content">
        <div class="dashboard-card">
          <h3>Your Activity</h3>
          <p>No recent activity to display.</p>
        </div>
        <div class="dashboard-card">
          <h3>Quick Actions</h3>
          <button class="dashboard-action">New Project</button>
          <button class="dashboard-action">View Statistics</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
