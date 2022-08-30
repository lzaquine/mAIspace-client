import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



function Marv() {
  
  const [prompt] = useState(null);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState("");

  const getMarv = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/app/Fisherman`);
      setQuestion(response.data.question);
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

  return (
    <div>
      <h1>Fisherman</h1>

      <h2>{prompt}</h2>
      

      <form onSubmit={handleSubmit}>
        <label htmlFor="question">Question:</label><br/>
        <input type="text" name="question" value={question} onChange={handleQuestion} /><br/>
        <button type="submit">Submit</button>
      </form>
      <h3>{question}</h3>

      {answer && (<h3>{answer}</h3>)}

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