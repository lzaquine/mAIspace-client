import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import robot from "../../Image/robot.jpeg";
import BeatLoader from "react-spinners/BeatLoader";

function Marvbot() {
  const [prompt, setPrompt] = useState(null);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState("");
  const [results, setResults] = useState(null);
  const [app, setApp] = useState(null);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const getMarvbot = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/app/marvbot`
      );
      setQuestion(response.data.question);
      setPrompt(response.data.prompt);
      setAnswer(response.data.answer);
      setApp(response.data._id);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/profile/${user._id}`
      );
      setResults(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMarvbot();
    getUser();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [user]);

  const handleQuestion = (e) => setQuestion(e.target.value);
  const token = localStorage.getItem("authToken");

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { prompt, question, answer };

    axios
      .post(`${process.env.REACT_APP_API_URL}/app/marvbot`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setQuestion(question);
        setAnswer(answer);
        getUser();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <img
        src={robot}
        alt="logo"
        className="card w-24 rounded-lg left-1/2 transform -translate-x-1/2 mt-7 mb-5  saturate-200 glass justify-center"
      />

      <h1>Marv</h1>

      <h2 className="mt-2">
        Marv is a factual chatbot that is also sarcastic and rude.
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="question"
          className="input input-bordered w-full rounded-lg max-w-xs mt-1 mb-3 mt-8 text-center text-neutral-400 opacity-95 justify-center"
          placeholder="Who are you?"
          onChange={(e) => setQuestion(e.target.value)}
          value={question}
        />
        <br />

        <button
          className="btn glass btn-sm rounded-full text-white text-center pl-5 pr-5 mb-8"
          type="submit"
        >
          Submit
        </button>
      </form>

      <div>
        {loading ? (
          <BeatLoader
            className="flex m-auto h-screen mt-60 justify-center items-center"
            color={"#797a97"}
            loading={loading}
            size={20}
          />
        ) : (
          <div>
            {results &&
              results
                .filter((el) => el.app === app)
                .map((el, index) => {
                  return (
                    <p>
                      <hr className="mb-2 mt-2 opacity-20" />
                      {el.question}
                      <br />

                      {el.answer}
                    </p>
                  );
                })}
          </div>
        )}
      </div>
      <Link
        className="btn btn-sm rounded-full pl-8 pr-8 text-white ml-19 mt-10 text-center "
        to="/app"
      >
        Back to Apps
      </Link>
    </div>
  );
}

export default Marvbot;
