import { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import { AuthContext } from "../../context/auth.context";

function Marvbot() {
  const [prompt, setPrompt] = useState(null);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState("");
  const [results, setResults] = useState(null);
  const [marvbotData, setMarvbotData] = useState(null);
  const { user } = useContext(AuthContext);
  const chatDivRef = useRef(null);

  const getMarvbot = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/app/marvbot`
      );
      if (response && response.data) {
        // Extract the array of questions and answers
        const marvbotData = response.data;
        console.log(marvbotData)
        const { updatedAt } = marvbotData;
        console.log(marvbotData)
        // Convert the string to an array
        const sortedQa = JSON.parse(updatedAt);
        console.log(sortedQa)
        // Sort the array of questions and answers by date
        sortedQa.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  
        // Set the sorted array of questions and answers to state
        setMarvbotData({ ...marvbotData, updatedAt: sortedQa });
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
    if (chatDivRef.current) {
      chatDivRef.current.scrollTop = chatDivRef.current.scrollHeight;
    }
    getMarvbot();
    getUser();
  }, [results]);

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

      <div className="myChatDiv" ref={chatDivRef}>
  {results &&
    marvbotData &&
    results
      .filter((el) => el.app === marvbotData?.name)
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
