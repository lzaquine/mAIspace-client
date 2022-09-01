import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';

function Summarizer() {
  const [prompt, setPrompt] = useState(null);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState("");
  const [results, setResults] = useState(null);
  const [app, setApp] = useState(null);
  const {user} = useContext(AuthContext);

  const getSummarizer = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/app/Summarizer`);
      setQuestion(response.data.question);
      setPrompt(response.data.prompt);
      setAnswer(response.data.answer);
      setApp(response.data._id);
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
    getSummarizer();
    getUser();
  }, [user]);

  
  const handleQuestion = (e) => setQuestion(e.target.value);
const token = localStorage.getItem('authToken');

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { prompt, question , answer };

    axios
      .post(`${process.env.REACT_APP_API_URL}/app/Summarizer`, body, {
        headers: {
          Authorization: `Bearer ${token}`
      }})
      .then(() => {
        setQuestion(question);
        setAnswer(answer);
        getSummarizer();
      })
      .catch((err) => console.log(err));
    };

  return (
    <div>
      <h1>Summarizer</h1>

      {/* <h2>{prompt}</h2> */}
      <h2>Translates difficult text into simpler concepts (for a 2nd graders).</h2>
      

      
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="question">Question:</label><br/> */}

        <input type="text" name="question" className='input input-bordered w-full rounded-lg max-w-xs mt-1 mb-3 mt-8 text-center opacity-95 justify-center' placeholder="Insert a text" onChange={(e) => setQuestion(e.target.value)} value={question} /><br/>
        {/* <textarea name="question" placeholder="question" onChange={handleQuestion}></textarea><br/> */}
        <button className="btn glass btn-sm rounded-full text-white text-center pl-5 pr-5 mb-8" type="submit">Submit</button>
      </form>
      {/* <h3 className='mb-4'>{question}</h3> */}
      {results && results.filter((el) => el.app === app ).map((el, index) => {
        return (
          <p>
            Q: {el.question}
            <br/>
            
            A: {el.answer}
            
            <hr className="mb-2 mt-2 opacity-20"/>
          </p>
        )
      })}
      <Link className="btn btn-sm rounded-full pl-8 pr-8 text-white ml-19 mt-10 text-center " to="/app">Back to Apps</Link>
    </div>
  );
}

export default Summarizer