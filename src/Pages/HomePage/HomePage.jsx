import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import video from "../../Image/video.MP4";
import { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";

function HomePage() {
  const { loggedIn } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

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
          <video
            controls
            autoPlay
            className="w-1/2 absolute rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-32"
          >
            <source src={video} />
          </video>
        </>
      )}

      {loggedIn && (
        <>
          <Link
            className="rounded-lg pl-8 pr-8 pt-2 pb-2 text-white ml-19 mt-52 glass text-center w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            to="/profile"
          >
            PROFILE
          </Link>
          <Link
            className="rounded-lg pl-8 pr-8 pt-2 pb-2 text-white ml-19 mt-64 glass text-center w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            to="/app"
          >
            APPLICATIONS
          </Link>
        </>
      )}
      {!loggedIn && (
        <>
          <Link
            className="rounded-lg pl-8 pr-8 pt-2 pb-2 text-white ml-19 mt-52 glass text-center w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            to="/login"
          >
            LOG IN
          </Link>
          <Link
            className="rounded-lg pl-8 pr-8 pt-2 pb-2 text-white ml-19 mt-64 glass text-center w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            to="/signup"
          >
            SIGN UP
          </Link>
        </>
      )}
    </div>
  );
}

export default HomePage;
