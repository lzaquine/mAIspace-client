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
      {profile && (
        <>
          {/* <img src={profileImg} alt={profile.name} /> */}
          <img src={robotavatarum} alt="logo" className='w-1/5 p-1  mb-5'/>
          <h1 className="-mt-42">Welcome to your mAIspace profile, {profile.name}</h1>
          <p> There's nothing really for you to see here. All your apps are somewhere else. Look for Marv and he'll help you by answering your questions. Good luck </p>
          
        </>
      )}
      <Link to="/" className='btn w-full btn-sm rounded-lg pt-1 pb-1 text-white text-center mt-12'>Home Page</Link>
      <Link className="btn w-full btn-sm rounded-lg text-white pt-1 pb-1 text-center mt-4" to="/app">APPLICATIONS</Link>
      <Link to="/editprofile" className="btn w-full btn-sm rounded-lg pt-1 pb-1 text-white text-center mt-4">Edit Profile</Link>
      <button className="btn w-full btn-sm rounded-lg text-white pt-1 pb-1 text-center mt-4" onClick={logout}>Sign Out</button>
      <button className="btn w-full btn-sm rounded-lg text-white pt-1 pb-1 text-center mt-4 mb-8" onClick={deleteProfile}>Delete Profile</button>
      
      
      
      
      
    </div>
  )
}

export default Profile