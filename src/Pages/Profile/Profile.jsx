import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  const getProfile = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");
      let response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/profile/${id}`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      setProfile(response.data.reverse());
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

useEffect(() => {
  getProfile();
}, []);

  return (
    <div>
      <h1>Profile</h1>
      {profile && (
        <>
          <p>{profile.id}</p>
        </>
      )}
      <Link to="/">Home</Link>
      <Link to={`/profile/edit/delete/${id}`}> Delete Profile</Link>
    </div>
  )
}

export default Profile