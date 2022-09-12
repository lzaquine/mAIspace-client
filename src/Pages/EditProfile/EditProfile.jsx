import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import maispace from "../../Image/maispace.png";
import BeatLoader from "react-spinners/BeatLoader";

function EditProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [field, setField] = useState("");
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const getProfile = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/profile/${user._id}`
      );

      setName(response.data.name);
      setEmail(response.data.email);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
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
        setName("");
        setEmail("");
        setField("");
        navigate(`/profile`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
    {loading ? (
        <BeatLoader
          className="flex m-auto h-screen mt-60 justify-center items-center"
          color={"#797a97"}
          loading={loading}
          size={20}
        />
      ) : (
        <>

      <img
        src={maispace}
        alt="logo"
        className="w-24 absolute rounded-lg mt-24 saturate-200 glass p-2 absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <div className="card w-96 saturate-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mb-20">
        <form onSubmit={handleSubmit}>
          <div class="collapse mt-10">
            <input className="translate-x-1/3 mt-3" type="checkbox" />
            <div class="collapse-title text-xl font-medium">
              What's your name?
            </div>
            <div class="collapse-content">
              <input
                className="input input-bordered w-full rounded-full max-w-xs mt-1 mb-3 text-center text-neutral-400 opacity-95 justify-center"
                type="text"
                name="name"
                placeholder={name}
                onChange={handleName}
              />
            </div>
          </div>

          <hr className="mt-2 mb-2 opacity-30" />

          <div class="collapse">
            <input className="translate-x-1/3 mt-3" type="checkbox" />
            <div class="collapse-title text-xl font-medium">
              What's your email?
            </div>
            <div class="collapse-content">
              <input
                className="input input-bordered w-full rounded-full max-w-xs mt-1 mb-3 text-center text-neutral-400 opacity-95 justify-center"
                type="email"
                name="email"
                placeholder={email}
                onChange={handleEmail}
              />
            </div>
          </div>

          <button
            className="btn glass w-full btn-sm rounded-full text-white text-center mt-12 mb-2"
            type="submit"
          >
            Edit PROFILE
          </button>
        </form>

        <Link
          to="/profile"
          className="btn  btn-sm rounded-full text-white ml-19 text-center "
        >
          <b>BACK TO PROFILE</b>
        </Link>
      </div>
        </>
        )}
    </div>
  );
}

export default EditProfile;
