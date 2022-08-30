import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/auth.context';
import { useContext } from 'react';

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
      <h1>Profile</h1>
      {profile && (
        <>
          <p>Welcome, {profile.name}</p>
        </>
      )}
      <Link to="/">Home</Link>
      <button onClick={logout}>Logout</button>
      <button onClick={deleteProfile}>Delete Profile</button>
      
    </div>
  )
}

export default Profile