import { Link } from 'react-router-dom';


function Apps() {
  return (
    <div>
      <h1>Apps</h1>
      <Link to="/app/fisherman">fisherman</Link>
      <Link to="/app/chat">Chat</Link>


      <Link to="/">Home</Link>
    </div>
  )
}

export default Apps