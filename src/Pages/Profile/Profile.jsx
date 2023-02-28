import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";
import NavbarProfile from '../../components/NavbarProfile'
import Cards from '../../components/Cards'
import Blober from '../../components/Blober'


function Profile() {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);

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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();

  }, []);

  return (
    <div>
        <NavbarProfile/>
        <Blober/>
      {profile && (
        <>
          <h1 className="mt-14 text-black font-bold text-3xl">Hi, {profile.name}!</h1>
        </>
      )}
        <Cards/>
    </div>
  );
}

export default Profile;
