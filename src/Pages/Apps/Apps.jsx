import { Link } from 'react-router-dom';


function Apps() {
  return (
    <div>
      <h1>Apps</h1>
      <Link to="/app/fisherman">fisherman</Link>
      <Link to="/app/chat">Chat</Link>
      <Link to="/">Home</Link>
      <section className="glass btn-wide w-full btn-sm btn-outline absolute bottom-0 text-white text-center opacity-70 h-24"><Link to="/">Teste</Link></section>
    </div>
  
    
  )
}

export default Apps