import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import maispace from "../../Image/maispace.png";

function SignUp() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
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
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err.response.data.errorMessage);
      });
  };


  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "299027234598-fahdj57q84jh8onto8dh5ii0neu10un7.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("google-signin"),
      { theme: "outline", size: "large" } 
    );
  }, []);



  return (
    <div className="card w-96 saturate-200 glass absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mb-20">
      <img src={maispace} alt="logo" className="w-3/6 mt-4 translate-x-1/2" />

      <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input
          className="input input-bordered w-full rounded-full max-w-xs mt-1 mb-3 text-center text-neutral-400 opacity-95 justify-center"
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleName}
        />

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
          className="btn btn-wide btn-sm btn-outline rounded-full text-white text-center mt-1 mb-2"
          type="submit"
        >
          Sign Up
        </button>
      </form>

      {errorMessage && <p>{errorMessage}</p>}
      <hr className="mt-3 mt-6 opacity-20" />
      <p className="mt-4">Already have an account?</p>
      <Link className="mb-4" to="/login">
        Log In
      </Link>
      <div id="google-signin"></div>
    </div>
  );
}

export default SignUp;
