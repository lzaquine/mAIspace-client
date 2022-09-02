import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/auth.context';
import { useContext } from 'react';
import profilevideo from '../../Image/profilevideo.mp4';

function Profile() {
  const { user, logout }  = useContext(AuthContext); 
  /* const navigate = Navigate() */
  const [profile, setProfile] = useState(null);

  const navigate = useNavigate();


  const storedToken = localStorage.getItem("authToken");

  const deleteProfile = () => {
      axios.delete(`${process.env.REACT_APP_API_URL}/profile/${user._id}`)
      .then(() => {
        logout();
        navigate("/signup")
      })
      .catch((err) => console.log(err));
  }

  const getProfile = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/profile/${user._id}`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      setProfile(response.data);
    } catch (error) {
      console.log(error);
    }
  };

useEffect(() => {
  getProfile();
}, [user]);

  return (
    <div>
      {profile && (
        <>
          
          <h1 className="mt-5">Hi, {profile.name}!</h1>
          <video controls autoPlay className="w-1/2 absolute rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <source src={profilevideo} />
          </video>
          
        </>
      )}
      <Link to="/" className='btn ml-8 btn-sm rounded-lg pt-1 pb-1 text-white text-center mt-12'>Home Page</Link>
      <Link className="btn ml-8 btn-sm rounded-lg text-white pt-1 pb-1 text-center mt-4" to="/app">APPLICATIONS</Link>
      <Link to="/editprofile" className="btn ml-8 btn-sm rounded-lg pt-1 pb-1 text-white text-center mt-4">Edit Profile</Link>
      <button className="btn ml-8 btn-sm rounded-lg text-white pt-1 pb-1 text-center mt-4" onClick={logout}>Sign Out</button>
      <button className="btn ml-8 btn-sm rounded-lg text-white pt-1 pb-1 text-center mt-4 mb-8" onClick={deleteProfile}>Delete Profile</button>
      
      
      
      
      
    </div>
  )
}

export default Profile