import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import maispace from "../../Image/maispace.png";
import NavbarLogIn from "../../components/NavbarLogIn";
import Blober from '../../components/Blober'


function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const body = { email, password };

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
    <>
      <NavbarLogIn />
      <Blober/>
      <div className="my-card bg-white p-8 rounded-3xl mx-auto mt-16 max-w-xl shadow-[0_15px_40px_10px_#66b1d6]">
        <img src={maispace} alt="logo" className="w-48 mx-auto mb-6" />
        <hr className="card-hr mb-6" />
        <form onSubmit={handleLoginSubmit}>
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
            LOG IN
          </button>
        </form>

        {errorMessage && (
          <p className="error-card text-red-500 text-center my-6">
            {errorMessage}
          </p>
        )}

        <p className="p-card text-center mt-6 text-black">
          Don't have an account yet?{" "}<br/>
          <Link className="link-card-acc text-[#66b1d6] hover:text-[#4e98bd] font-bold" to={"/signup"}>
            Create New Account
          </Link>
        </p>
      </div>
    </>
  );
}

export default LoginPage;
