import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Apps() {
  const { id } = useParams();
  const [app, setApp] = useState(null);

  

  return (
    <div>
      <h1>Apps</h1>
      <p>{id}</p>

      <Link to="/">Home</Link>
    </div>
  )
}

export default Apps