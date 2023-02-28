import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { FaTimes } from 'react-icons/fa';
import { useNavigate, Link } from "react-router-dom";

function ProfileCard() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const { user, logout } = useContext(AuthContext);
    const [profile, setProfile] = useState(null);
  
    const navigate = useNavigate();
    const storedToken = localStorage.getItem("authToken");

    const deleteProfile = () => {
        axios
          .delete(`${process.env.REACT_APP_API_URL}/profile/${user._id}`)
          .then(() => {
            logout();
            navigate("/signup");
          })
          .catch((err) => console.log(err));
      };
  
    const getProfile = async () => {
      try {
        let response = await axios.get(
          `${process.env.REACT_APP_API_URL}/profile/${user._id}`,
          {
            headers: { Authorization: `Bearer ${storedToken}` },
          }
        );
        setProfile(response.data);
        setName(response.data.name);
        setEmail(response.data.email);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getProfile();
  
    }, []);
  
    const handleName = (e) => setName(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const body = { name, email };
  
      axios
        .put(`${process.env.REACT_APP_API_URL}/editprofile/${user._id}`, body)
        .then(() => {
          setName("");
          setEmail("");
          navigate(`/profile`);
        })
        .catch((err) => console.log(err));
    };

  return (
    <div className="profile-card">
      <div className="profile-card-header">
        <h3>Edit Profile</h3>
        <Link to='/profile'><button><FaTimes/></button></Link>
      </div>
      <form onSubmit={handleSubmit}>
      <div className="profile-card-content">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleName} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmail} />

        <button type="submit" className="hover:bg-green-600 transition-all duration-300">Confirm</button>
        <button onClick={deleteProfile}>Delete Account</button>
      </div>
        </form>
    </div>
  );
}

export default ProfileCard;
