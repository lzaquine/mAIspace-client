import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Marv() {
  const { appName } = useParams();
  const [marv, setMarv] = useState(null);
  

  const getMarv = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/app/${appName}`) 
        setMarv(response.data);
        
        console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMarv();
  } , []);

  

  return (
    <div>
        {marv ? (  
          <>
      <h1>Marv:</h1>
            <>
            <p>{marv.appName}</p>
            <p>{marv.appDescription}</p>
            </>
      <Link to="/">Home</Link>
      </>
        ) : <p>Not Found</p> }
    </div>
  )
}

export default Marv