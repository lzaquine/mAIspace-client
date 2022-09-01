import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import video from "../../Image/video.MP4";
import maispace  from "../../Image/maispace.png";

function HomePage() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <div>
      <h1 className="p-5"> mAIspace </h1>
      

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

      <video className="w-1/2 absolute rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-32" controls autoPlay >
        <source src={video} />
      </video>
      {/* <img src={maispace} alt="logo" className='w-24 absolute rounded-lg saturate-200 glass p-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '/> */}


      {loggedIn && (
        <>
          <Link className="btn btn-sm rounded-lg pl-8 pr-8 text-white ml-19 mt-52 glass text-center w-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" to="/profile">Profile</Link>
          <Link className="btn btn-sm rounded-lg pl-8 pr-8 text-white ml-19 mt-64 glass text-center w-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" to="/app">APPS</Link>
          {/* <Link to="/editprofile">Edit Profile</Link> */}
        </>
      )}
      {!loggedIn && (
        <>
          <Link className="btn btn-sm rounded-lg pl-8 pr-8 text-white ml-19 mt-52 glass text-center w-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" to="/login">Log In</Link>
          <Link className="btn btn-sm rounded-lg pl-8 pr-8 text-white ml-19 mt-64 glass text-center w-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" to="/signup">Sign Up</Link>
        </>
      )}
    </div>
  );
}

export default HomePage;
