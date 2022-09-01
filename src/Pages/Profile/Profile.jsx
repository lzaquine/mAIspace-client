import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/auth.context';
import { useContext } from 'react';
import robotavatarum from '../../Image/robotavatarum.png';

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
      <Link to="/" className='btn glass btn-sm rounded-lg text-white text-center mr-5'>Home Page</Link>
      <Link to="/editprofile" className="btn glass btn-sm rounded-lg text-white text-center mr-5 ">Edit Profile</Link>
      <Link className="btn glass btn-sm rounded-lg text-white text-center mr-5" to="/app">APPS</Link>
      <button className="btn glass btn-sm rounded-lg text-white text-center mr-5" onClick={logout}>Sign Out</button>
      <button className="btn glass btn-sm rounded-lg text-white text-center " onClick={deleteProfile}>Delete Profile</button>
    <img src={robotavatarum} alt="logo" className='w-3/6 p-4 translate-x-1/2'/>
      
      
      {profile && (
        <>
          {/* <img src={profileImg} alt={profile.name} /> */}
          <p className='mt-10'>Welcome to mAIspace, {profile.name}</p>
        </>
      )}
      
      
      
    </div>
  )
}

export default Profile