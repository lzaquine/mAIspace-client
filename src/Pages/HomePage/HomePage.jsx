import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function HomePage() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <div>
      <h1>HOME PAGE</h1>
      {loggedIn && (
        <>
          <Link to="/profile">Profile</Link>
          <Link to="/app">App</Link>
          <Link to="/editprofile">Edit Profile</Link>
        </>
      )}
      {!loggedIn && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </>
      )}
    </div>
  );
}

export default HomePage;
