import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';


function EditProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [field, setField] = useState('');
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
  const handleField = (e) => setField(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { name, email, field };

    axios
      .put(`${process.env.REACT_APP_API_URL}/editprofile/${user._id}`, body)
      .then(() => {
        setName('');
        setEmail('');
        setField('');
        navigate(`/profile`);
      })
      .catch((err) => console.log(err));
  };


  return (
    <div>
      <h3>Edit Profile</h3>

      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder={name} onChange={handleName} />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder={email} onChange={handleEmail} />

        <label htmlFor="select"></label>
        <select name="select" id="select" onChange={handleField}>Field:
            <option placeholder={field}>{field}</option>
            <option value="Fun">Fun</option>
            <option value="Business">Business</option>
            </select>

        <button type="submit">Edit Profile</button>
      </form>
      <>
        <Link to="/profile">Back to Profile</Link>
      </>

    </div>
  );
}

export default EditProfile;