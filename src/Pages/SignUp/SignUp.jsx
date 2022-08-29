import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function SignUp() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

    const navigate = useNavigate();

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleName = (e) => setName(e.target.value);

    const handleSubmit = (e) => {
    e.preventDefault();

    const body = { name, email, password };

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/auth/signup`, body)
      .then(() => {
        navigate('/login');
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err.response.data.errorMessage);
      });
  };

  return (
    <div className="SignUp">
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={password} onChange={handlePassword} />
        <button type="submit">Sign Up</button>
      </form>

      {errorMessage && <p>{errorMessage}</p>}

      <p>Already have an account?</p>
      <Link to="/login">Login</Link>
      <Link to="/">Home</Link>
    </div>
  );
}

export default SignUp;