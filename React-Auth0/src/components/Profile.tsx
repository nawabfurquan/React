import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return isAuthenticated ? (
    <div>
      <img src={user?.picture} alt={user?.name} />
      <h2>Name: {user?.name}</h2>
      <p>Email: {user?.email}</p>
    </div>
  ) : null;
};

export default Profile;
