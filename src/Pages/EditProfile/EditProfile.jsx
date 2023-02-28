import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import NavbarEditProfile from '../../components/NavbarEditProfile'
import Blober from '../../components/Blober'
import EditCard from '../../components/EditCard'

function EditProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);

  const navigate = useNavigate();
  const storedToken = localStorage.getItem("authToken");

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
    <div>
    <NavbarEditProfile/>
    <Blober/>
    <EditCard/>
    {profile && (
        <>
          <h1 className="mt-14 text-black opacity-20 text-3xl">Hi, {profile.name}!</h1>
        </>
      )}
      <>
<div className="card-container md:mr-28 md:ml-28 opacity-20">
  <div className="card md:top-20">
  <i className="fa-solid fa-code"></i>
    <h3>Examples</h3>
  </div>
  <div className="card md:top-20">
  <i class="fa-sharp fa-solid fa-gears"></i>
    <h3>Capabilities</h3>
  </div>
  <div className="card md:top-20">
  <i class="fa-sharp fa-solid fa-bug"></i>
    <h3>Limitations</h3>
  </div>
  <div className="card md:top-20">
    <h3>Prompt</h3>
    <hr />
    <p>Explain quantum computing in simple terms.</p>
  </div>
  <div className="card md:top-20">
    <h3>Card Title</h3>
    <hr />
    <p>Remembers what user said earlier in the conversation</p>
  </div>
  <div className="card md:top-20">
    <h3>Card Title</h3>
    <hr />
    <p>May occasionally generate incorrect information</p>
  </div>
  <div className="card md:top-20">
  <h3>Prompt</h3>
    <hr />
    <p>How do I make an HTTP request in Javascript?</p>
  </div>
  <div className="card md:top-20">
    <h3>Card Title</h3>
    <hr />
    <p>Trained to accept inappropriate requests</p>
  </div>
  <div className="card md:top-20">
    <h3>Card Title</h3>
    <hr />
    <p>May occasionally produce harmful instructions or biased content</p>
  </div>
  
</div>
</>
    {/* {loading ? (
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
        )} */}
    </div>
  );
}

export default EditProfile;
