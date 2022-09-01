import { Link } from 'react-router-dom';
import fisherman from '../../Image/fisherman.png';
import maispace from '../../Image/maispace.png';
import settingicon from '../../Image/settingicon.png';
import homeicon from '../../Image/homeicon.png';

function Apps() {
  return (
    <div>
      <h1>Apps</h1>
      <div className=" grid grid-rows-4 grid-cols-4">

      <Link to="/app/fisherman">
      <img src={fisherman} alt="logo" className='ml-4 card w-20 absolute rounded-lg mt-20 saturate-200 glass'/>
      <h2 className='ml-4 w-20 absolute mt-40'>Fisherman</h2>
      </Link>
      

      <Link to="/app/list">
      <img src={maispace} alt="logo" className='card w-20 absolute rounded-lg mt-20 saturate-200 glass'/> {/* ml-56 */}
      </Link>

      <Link to="/">
      <img src={homeicon} alt="logo" className='card w-20 absolute rounded-lg mt-20 saturate-200 glass '/>
      </Link>
     
      <Link to="/app/english">
      <img src={maispace} alt="logo" className='card w-20 absolute rounded-lg mt-20 saturate-200 glass '/>
      </Link>

      <Link to="/app/Keypoints">
      <img src={fisherman} alt="logo" className='ml-4 card w-20 absolute rounded-lg mt-64 saturate-200 glass'/>
      </Link>

      <Link to="/app/summarizer">
      <img src={maispace} alt="logo" className='card w-20 absolute rounded-lg mt-64 saturate-200 glass '/>
      </Link>

      <Link to="/profile">
      <img src={settingicon} alt="logo" className='card w-20 absolute rounded-lg mt-64 saturate-200 glass'/>
      {/* <h2 className='ml-4 absolute mt-80 '>Settings</h2> */}
      </Link>

      <Link to="/app/interview">
      <img src={maispace} alt="logo" className='card w-20 absolute rounded-lg mt-64 saturate-200 glass '/>
      </Link>

      <Link to="/app/Horrorstory">
      <img src={fisherman} alt="logo" className='card w-20 absolute rounded-lg mt-96 saturate-200 glass ml-4 '/>
      </Link>
      <Link to="/app/Keywords">
      <img src={fisherman} alt="logo" className='card w-20 absolute rounded-lg mt-96 saturate-200 glass '/>
      </Link>

      <Link to="/app/codequestion">
      <img src={fisherman} alt="logo" className='card w-20 absolute rounded-lg mt-96 saturate-200 glass '/>
      </Link>

      <Link to="/app/Marvbot">
      <img src={fisherman} alt="logo" className='card w-20 absolute rounded-lg mt-96 saturate-200 glass '/>
      </Link>


      </div>



      <Link to="/">Home</Link>
      {/* <section className="glass btn-wide w-full btn-sm btn-outline absolute bottom-0 text-white text-center opacity-70 h-24"><Link to="/">Teste</Link></section> */}
    </div>
  
    
  )
}

export default Apps