import { useState, useContext, Component } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import maispace from "../../Image/maispace.png";


function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [field, setField] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);


  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleField = (e) => setField(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const body = { email, password, field };

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/auth/login`, body)
      .then((response) => {
        console.log("JWT token", response.data.authToken);

        storeToken(response.data.authToken);

        authenticateUser();
        navigate("/");
      })
      .catch((err) => {
        setErrorMessage(err.response.data.errorMessage);
      });
  };

  return (
    <div className="card w-96 glass z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-20">
      <img src={maispace} alt="logo" className="w-3/6 mt-4 translate-x-1/2" />

      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="email"></label>
        <input
          className="input input-bordered w-full rounded-full max-w-xs mt-1 mb-3 text-center text-neutral-400 opacity-95 justify-center"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleEmail}
        />

        <label htmlFor="password"></label>
        <input
          className="input input-bordered w-full rounded-full max-w-xs mt-1 mb-3 text-center text-neutral-400 opacity-95 justify-center"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handlePassword}
        />

        <button
          type="submit"
          className="btn btn-wide btn-sm btn-outline rounded-full text-white text-center mt-1 mb-2"
        >
          Log In
        </button>
        
      </form>

      {errorMessage && <p>{errorMessage}</p>}

      <hr className="mt-3 mt-6 opacity-20" />
      <p className="mt-4 ">Don't have an account yet?</p>
      <Link className="mb-4" to={"/signup"}>
        Create New Account
      </Link>
    </div>
  );
}

export default LoginPage;
