import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';

function EditProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { user }  = useContext(AuthContext); 


  const navigate = useNavigate();

  const getProfile = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/profile/${user._id}`);

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
        setName('');
        setEmail('');
        navigate(`/profile`);
      })
      .catch((err) => console.log(err));
  };


  return (
    <div>
      <h3>Edit Profile</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={user.name} onChange={handleName} />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={user.email} onChange={handleEmail} />

        <button type="submit">Edit Profile</button>
      </form>
      <>
        <Link to="/profile">Back to Profile</Link>
      </>

    </div>
  );
}

export default EditProfile;