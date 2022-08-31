import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';



function Fisherman() {
  const [prompt, setPrompt] = useState(null);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState("");
  const {appName} = useParams();
  const {user} = useContext(AuthContext);

  const getFisherman = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/app/Fisherman`);
      setQuestion(response.data.question);
      setPrompt(response.data.prompt);
      setAnswer(response.data.answer);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFisherman();
  }, []);

  
  const handleQuestion = (e) => setQuestion(e.target.value);


  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { prompt, question , answer };

    axios
      .post(`${process.env.REACT_APP_API_URL}/app/Fisherman`, body)
      .then(() => {
        setQuestion(question);
        setAnswer(answer);
      })
      .catch((err) => console.log(err));
    };

  
  /* const questionCopy = [...question];
  if (questionCopy >= 1) {
    questionCopy.splice(1);
    setQuestion(questionCopy);
  } */

  return (
    <div>
      <h1>Fisherman</h1>

      {/* <h2>{prompt}</h2> */}
      <h2>Fisherman is a chatbot that reluctantly answers questions with sarcastic responses</h2>
      

      <form onSubmit={handleSubmit}>
        <label htmlFor="question">Question:</label><br/>

        <input type="text" name="question" placeholder="Ask something really silly" onChange={handleQuestion} /><br/>

        <button type="submit">Submit</button>
      </form>
      {/* <h3>{question}</h3> */}
      
      {question && ((<h3>{question}</h3>)) }
      {/* {questionCopy && (<h3>{questionCopy}</h3>)} */}
      
      {answer && (<h3>{answer}</h3>)} {/* getting a response but have to refresh it twice to see */}
      

      <Link to="/">Home</Link>
    </div>
  );
}

export default Fisherman