import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';

function Chat() {
  const [prompt, setPrompt] = useState(null);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState("");
  const [results, setResults] = useState(null);
  const {appName} = useParams();
  const {user} = useContext(AuthContext);

  const getChat = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/app/Chat`);
      setQuestion(response.data.question);
      setPrompt(response.data.prompt);
      setAnswer(response.data.answer);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/profile/${user._id}`);
      setResults(response.data.results)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getChat();
    getUser();
  }, [user]);

  
  const handleQuestion = (e) => setQuestion(e.target.value);
const token = localStorage.getItem('authToken');

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { prompt, question , answer };

    axios
      .post(`${process.env.REACT_APP_API_URL}/app/Chat`, body, {
        headers: {
          Authorization: `Bearer ${token}`
      }})
      .then(() => {
        setQuestion(question);
        setAnswer(answer);
      })
      .catch((err) => console.log(err));
    };

  return (
    <div><br/>
      <h1>Chat</h1>

      {/* <h2>{prompt}</h2> */}
      <h2>Chat is a chatbot that reluctantly answers questions with sarcastic responses</h2><br/><br/>
      

      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="question">Question:</label><br/> */}

        <input type="text" name="question" className='text-black' placeholder="Ask something really silly" onChange={handleQuestion} /> <br/><br/>
        {/* <textarea name="question" placeholder="question" onChange={handleQuestion}></textarea><br/> */}
        <button type="submit">Submit</button> <br/><br/> <br/>
      </form>
      
      <h3>{question}</h3>
      <hr className='opacity-50'/><br/>
      {results && results.map ((x, index) => {
        return (
          <p>
          
            Q: {x.question}
            <br/>
            {x.answer}
            <hr className='opacity-50'/>
            <br/><br/>
          </p>
        )
      })}
      <br/><br/><Link to="/">Home</Link>
    </div>
  );
}

export default Chat