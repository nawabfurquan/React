import "./App.css";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div className="App">
      <Profile />
      <Login label="Log In" />
      <Logout label="Logout" />
    </div>
  );
}

export default App;
