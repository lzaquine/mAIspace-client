import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/auth.context";
import BeatLoader from "react-spinners/BeatLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../components/Navbar.jsx";

function English() {
  const [prompt, setPrompt] = useState(null);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState("");
  const [results, setResults] = useState(null);
  const [app, setApp] = useState(null);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const notify = () =>
    toast.success("🦄 Wow so easy!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });

  const getEnglish = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/app/english`
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
      if (user) {
        let response = await axios.get(
          `${process.env.REACT_APP_API_URL}/profile/${user._id}`
        );
        setResults(response.data.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEnglish();
    getUser();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [user]);

  const token = localStorage.getItem("authToken");

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { prompt, question, answer };

    axios
      .post(`${process.env.REACT_APP_API_URL}/app/english`, body, {
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
      />

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
          <Navbar name="ENGLISH GRAMMAR" link="/app/english" />
            <div className="myChatDiv">
              {results &&
                results
                  .filter((el) => el.app === app)
                  .map((el, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col p-4 mb-2 chatDiv"
                      >
                        <div className="text-left font-bold flex-row mb-6">
                          <p className="text-[#423f3f]">You: {el.question}</p>
                        </div>
                        <div className="text-black">
                          <p>{el.answer}</p>
                        </div>
                      </div>
                    );
                  })}
              <form onSubmit={handleSubmit}>
                <div className="input-container">
                  <input
                    type="text"
                    name="question"
                    className="input input-bordered w-full rounded-lg max-w-xs mb-16 text-center justify-center"
                    placeholder="Who are you?"
                    onChange={(e) => setQuestion(e.target.value)}
                    value={question}
                  />
                  <button className="" type="submit" onClick={notify}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default English;
