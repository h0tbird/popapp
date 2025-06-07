import { FunctionalComponent } from 'preact';
import Profile from '../components/Profile';
import { useAuth } from '../contexts/AuthContext';

const ProfilePage: FunctionalComponent = () => {
  const { currentUser } = useAuth();
  
  if (!currentUser) {
    return <div>Loading profile...</div>;
  }
  
  return (
    <div class="page profile-page">
      <Profile />
    </div>
  );
};

export default ProfilePage;
