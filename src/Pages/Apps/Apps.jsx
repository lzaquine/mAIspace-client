import { Link } from 'react-router-dom';
import fisherman from '../../Image/fisherman.png';
import maispace from '../../Image/maispace.png';


function Apps() {
  return (
    <div>
      <h1>Apps</h1>
      <div className="ml-14 grid grid-rows-4 grid-cols-4">

      <Link to="/app/fisherman">
      <img src={fisherman} alt="logo" className='card w-24 absolute rounded-lg mt-20 saturate-200 glass'/>
      </Link>
      

      <Link to="/app/chat">
      <img src={fisherman} alt="logo" className='card w-24 absolute rounded-lg mt-20 saturate-200 glass'/> {/* ml-56 */}
      </Link>

      <Link to="/app/chat">
      <img src={fisherman} alt="logo" className='card w-24 absolute rounded-lg mt-20 saturate-200 glass '/>
      </Link>

      <Link to="/app/chat">
      <img src={fisherman} alt="logo" className='card w-24 absolute rounded-lg mt-20 saturate-200 glass '/>
      </Link>

      <Link to="/app/chat">
      <img src={fisherman} alt="logo" className='card w-24 absolute rounded-lg mt-64 saturate-200 glass'/>
      </Link>

      <Link to="/app/chat">
      <img src={fisherman} alt="logo" className='card w-24 absolute rounded-lg mt-64 saturate-200 glass '/>
      </Link>
      
      <Link to="/app/summarizer">
      <img src={maispace} alt="logo" className='card w-24 absolute rounded-lg mt-64 saturate-200 glass '/>
      </Link>
      </div>


      <Link to="/">Home</Link>
      <section className="glass btn-wide w-full btn-sm btn-outline absolute bottom-0 text-white text-center opacity-70 h-24"><Link to="/">Teste</Link></section>
    </div>
  
    
  )
}

export default Apps