import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Chat() {
  const { appName } = useParams();
  const [chat, setChat] = useState(null);

  const getChat = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/app/${appName}`) 
        setChat(response.data);
        console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getChat();
  } , []);


  return (
    <div>
        {chat ? (  
          <>
      <h1>Chat:</h1>
            <>
            <p>{chat.appName}</p>
            <p>{chat.appDescription}</p>
            </>
      <Link to="/">Home</Link>
      </>
        ) : <p>Not Found</p> }
    </div>
  )
}

export default Chat