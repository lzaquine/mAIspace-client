import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';



function Marv() {
  
  const [prompt, setPrompt] = useState(null);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState("");


  /* const navigate = useNavigate(); */

  const getMarv = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/app/Fisherman`);

      
      setAnswer(response.data.answer);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMarv();
  }, []);

  
  const handleQuestion = (e) => setQuestion(e.target.value);
 /*  const handleAnswer = (e) => setAnswer(e.target.value); */


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
    console.log(answer)

  return (
    <div>
      <h1>Fisherman</h1>

      <h2>{prompt}</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="question">Question:</label><br/>
        <input type="text" name="question" value={question} onChange={handleQuestion} /><br/>
        {/* <input type="text" name="answer" value={answer} onChange={handleAnswer}/> */}
        <button type="submit">Submit</button>
      </form>
      <h3>{question}</h3>
      <h3>{answer}</h3>

      <Link to="/">Home</Link>
    </div>
  );

  /* const getMarv = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/app/Fisherman`) 
        setMarv(response.data);
        
        console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMarv();
  } , []); */

  /* return (
    <div>
        {marv ? (  
          <>
      <h1>Marv:</h1>
            <>
            
            <p>{marv.appName}</p>
            <p>{marv.appDescription}</p>
            <p>{marv.prompt}</p>
            
            
            </>
      <Link to="/">Home</Link>
      </>
        ) : <p>Not Found</p> }
    </div>
  ) */
}

export default Marv