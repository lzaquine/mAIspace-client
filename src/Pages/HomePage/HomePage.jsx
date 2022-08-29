import { Link } from 'react-router-dom';

function HomePage() {

  return (
    <div>
    <h1>HOME PAGE</h1>
    
    <Link to="/profile">Profile</Link>
    <Link to="/app">App</Link>
    <Link to="/login">Login</Link>
    <Link to="/signup">Sign Up</Link>
    <Link to="/editprofile">Edit Profile</Link>
    </div>
  )
}

export default HomePage