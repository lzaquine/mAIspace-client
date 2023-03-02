import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/auth.context";

function Marvbot() {
  const [prompt, setPrompt] = useState(null);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState("");
  const [results, setResults] = useState(null);
  const [app, setApp] = useState(null);
  const { user } = useContext(AuthContext);

  const getMarvbot = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/app/marvbot`
      );
      if (response && response.data) {
        const sortedData = response.data.sort((a, b) =>
          new Date(a.createdAt) - new Date(b.createdAt)
        );
        setResults(sortedData);
        setQuestion(sortedData[0].question);
        setPrompt(sortedData[0].prompt);
        setAnswer(sortedData[0].answer);
        setApp(sortedData[0]._id);
        console.log(sortedData);
      }
      
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
    getMarvbot();
    getUser();
  }, [user]);

  /* const handleQuestion = (e) => setQuestion(e.target.value); */
  const token = localStorage.getItem("authToken");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { prompt, question, answer };

    try {
     const marvinho = await axios
        .post(`${process.env.REACT_APP_API_URL}/app/marvbot`, body, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        console.log(marvinho)
        setQuestion(question);
        setAnswer(answer);
        getUser();
    } catch (error) {
      console.log(error)
    }

  };

  

  return (
    <div>
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
          <button className="" type="submit">
            Submit
          </button>
        </div>
      </form>

      <div className="myChatDiv">
      {results &&
  results
    .filter((el) => el.app === app)
    .map((el, index) => {
      return (
        <div key={index} className="flex flex-col p-4 mb-2 chatDiv">
          <div className="text-left font-bold flex-row mb-6">
            <p className="text-[#423f3f]">You: {el.question}</p>
          </div>
          <div className="text-black">
            <p>{el.answer}</p>
          </div>
          <div className="text-gray-500 text-sm text-right">
            {new Date(el.createdAt).toLocaleString()}
          </div>
        </div>
      );
    })}

      </div>
    </div>
  );
}

export default Marvbot;
