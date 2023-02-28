import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import maispace from "../../Image/maispace.png";
import NavbarSignUp from "../../components/NavbarSignUp";
import Blober from '../../components/Blober'


function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const body = { name, email, password };

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/auth/signup`, body)
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        setErrorMessage(err.response.data.errorMessage);
      });
  };

  return (
    <>
      <NavbarSignUp />
      
      <div className="my-card bg-white p-8 rounded-3xl mx-auto mt-16 max-w-xl shadow-[0_15px_40px_10px_#66b1d6]">
        <img src={maispace} alt="logo" className="w-48 mx-auto mb-6" />
        <hr className="card-hr mb-6" />
        <form onSubmit={handleSignUpSubmit}>
          <input
            className="w-full text-black border-gray-300 rounded-lg mb-4 py-2 px-3 placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring focus:border-[#66b1d6]"
            type="text"
            name="name"
            placeholder="NAME"
            onChange={handleName}
          />
          <input
            className="w-full text-black border-gray-300 rounded-lg mb-4 py-2 px-3 placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring focus:border-[#66b1d6]"
            type="email"
            name="email"
            placeholder="EMAIL"
            onChange={handleEmail}
          />
          <input
            className="w-full text-black border-gray-300 rounded-lg mb-4 py-2 px-3 placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring focus:border-[#66b1d6]"
            type="password"
            name="password"
            placeholder="PASSWORD"
            onChange={handlePassword}
          />
          <hr className="card-hr2 my-6" />
          <button
            type="submit"
            className="w-full bg-green-500 rounded-lg py-2 text-white font-bold text-lg focus:outline-none hover:bg-green-600 transition-all duration-300"
          >
            CREATE NEW ACCOUNT
          </button>
        </form>

        {errorMessage && (
          <p className="error-card text-red-500 text-center my-6">
            {errorMessage}
          </p>
        )}

        <p className="p-card text-center mt-6 text-black">
          Already have an account?{" "}<br/>
          <Link
            className="link-card-acc text-[#66b1d6] hover:text-[#4e98bd] font-bold"
            to={"/login"}
          >
            Log In
          </Link>
        </p>
        <Blober/>
      </div>
    </>
  );
}

export default SignUpPage;
