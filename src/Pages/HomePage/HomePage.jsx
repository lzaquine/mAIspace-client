import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import video from "../../Image/video.MP4";

function HomePage() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <div>
      <h1 >HOME PAGE</h1>
      

      {/* <ul>
        <li>T0D0 List:</li>
        <li>fix the answers/questions & relate it to users (refresh problem).</li>
        <li>Add field/profile pic to each user</li>
        <li>Cloudinary</li>
        <li>Fix the links/routes frontend as I wrote on my notebook</li>
        <li>Footer</li>
        <li>Styles</li>
        <li>Find the dock</li>
        <li>Logos etc</li>
      </ul> */}

      <video className="w-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-32" controls autoPlay >
        <source src={video} />
      </video>


      {loggedIn && (
        <>
          <Link to="/profile">Profile</Link>
          <Link to="/app">App</Link>
          {/* <Link to="/editprofile">Edit Profile</Link> */}
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
