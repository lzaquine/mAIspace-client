import { Link } from "react-router-dom";
import settingicon from "../../Image/settingicon.png";
import english from "../../Image/english.jpeg";
import robot from "../../Image/robot.jpeg";
import keyword from "../../Image/keyword.jpeg";
import screamnobg from "../../Image/screamnobg.png";
import js from "../../Image/js.jpeg";
import keys from "../../Image/keys.jpeg";
import suma from "../../Image/suma.png";
import homenobg from "../../Image/homenobg.png";
import nobginterview from "../../Image/nobginterview.png";
import booknobg from "../../Image/booknobg.png";
import { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";

function Apps() {
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div>
      {loading ? (
        <BeatLoader className="flex m-auto h-screen mt-60 justify-center items-center" color={'#797a97'} loading={loading} size={20} />
      ) : (
        <div className=" grid grid-rows-4 grid-cols-4">
          <Link to="/app/Marvbot">
            <img
              src={robot}
              alt="logo"
              className="ml-4 card w-20 absolute rounded-lg mt-20 saturate-200 glass "
            />
          </Link>

          <Link to="/app/Keywords">
            <img
              src={keyword}
              alt="logo"
              className="card w-20 absolute rounded-lg mt-20 saturate-200 glass"
            />{" "}
          </Link>

          <Link to="/app/english">
            <img
              src={english}
              alt="logo"
              className="card w-20 absolute rounded-lg mt-20 saturate-200 glass "
            />
          </Link>

          <Link to="/app/codequestion">
            <img
              src={js}
              alt="logo"
              className="card w-20 absolute rounded-lg mt-20 saturate-200 glass "
            />
          </Link>

          <Link to="/app/Keypoints">
            <img
              src={keys}
              alt="logo"
              className="ml-4 card w-20 absolute rounded-lg mt-60 saturate-200 glass"
            />
          </Link>

          <Link to="/app/summarizer">
            <img
              src={suma}
              alt="logo"
              className="card w-20 absolute rounded-lg mt-60 saturate-200 glass "
            />
          </Link>

          <Link to="/app/list">
            <img
              src={booknobg}
              alt="logo"
              className="card w-20 absolute rounded-lg mt-60 saturate-200 glass"
            />
          </Link>

          <Link to="/app/interview">
            <img
              src={nobginterview}
              alt="logo"
              className="card w-20 absolute rounded-lg mt-60 saturate-200 glass "
            />
          </Link>

          <Link to="/app/Horrorstory">
            <img
              src={screamnobg}
              alt="logo"
              className="card w-20 absolute rounded-lg mt-96 saturate-200 glass ml-4 "
            />
          </Link>
          <Link to="/profile">
            <img
              src={settingicon}
              alt="logo"
              className="card w-20 absolute rounded-lg mt-96 saturate-200 glass "
            />
          </Link>

          <Link to="/">
            <img
              src={homenobg}
              alt="logo"
              className="card w-20 absolute rounded-lg mt-96 saturate-200 glass "
            />
          </Link>
        </div>
      )}
    </div>
  );
}

export default Apps;
