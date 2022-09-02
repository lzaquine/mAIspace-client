import { Link } from 'react-router-dom';
import settingicon from '../../Image/settingicon.png';
import english from '../../Image/english.jpeg';
import robot from '../../Image/robot.jpeg';
import keyword from '../../Image/keyword.jpeg';
import screamnobg from '../../Image/screamnobg.png';
/* import booksicon from '../../Image/booksicon.jpeg'; */
import js from '../../Image/js.jpeg';
import keys from '../../Image/keys.jpeg';
import suma from '../../Image/suma.png';
import homenobg from '../../Image/homenobg.png';
import nobginterview from '../../Image/nobginterview.png';
import booknobg from '../../Image/booknobg.png';
/* import andrenobg from '../../Image/andrenobg.png'; */



function Apps() {
  return (
    <div>
      {/* <h1>Apps</h1> */}
      <div className=" grid grid-rows-4 grid-cols-4">

      {/* <Link to="/app/fisherman">
      <img src={fisherman} alt="logo" className='ml-4 card w-20 absolute rounded-lg mt-20 saturate-200 glass'/>
      <h2 className='ml-4 w-20 absolute mt-40'>Fisherman</h2>
      </Link> */}
      <Link to="/app/Marvbot">
      <img src={robot} alt="logo" className='ml-4 card w-20 absolute rounded-lg mt-20 saturate-200 glass '/>
      </Link>
      

      <Link to="/app/Keywords">
      <img src={keyword} alt="logo" className='card w-20 absolute rounded-lg mt-20 saturate-200 glass'/> {/* ml-56 */}
      </Link>

      <Link to="/app/english">
      <img src={english} alt="logo" className='card w-20 absolute rounded-lg mt-20 saturate-200 glass '/>
      </Link>
     
      <Link to="/app/codequestion">
      <img src={js} alt="logo" className='card w-20 absolute rounded-lg mt-20 saturate-200 glass '/>
      </Link>

      <Link to="/app/Keypoints">
      <img src={keys} alt="logo" className='ml-4 card w-20 absolute rounded-lg mt-60 saturate-200 glass'/>
      </Link>

      <Link to="/app/summarizer">
      <img src={suma} alt="logo" className='card w-20 absolute rounded-lg mt-60 saturate-200 glass '/>
      </Link>

      <Link to="/app/list">
      <img src={booknobg} alt="logo" className='card w-20 absolute rounded-lg mt-60 saturate-200 glass'/>
      {/* <h2 className='ml-4 absolute mt-80 '>Settings</h2> */}
      </Link>

      <Link to="/app/interview">
      <img src={nobginterview} alt="logo" className='card w-20 absolute rounded-lg mt-60 saturate-200 glass '/>
      </Link>

      <Link to="/app/Horrorstory">
      <img src={screamnobg} alt="logo" className='card w-20 absolute rounded-lg mt-96 saturate-200 glass ml-4 '/>
      </Link>
      <Link to="/profile">
      <img src={settingicon} alt="logo" className='card w-20 absolute rounded-lg mt-96 saturate-200 glass '/>
      </Link>

      <Link to="/">
      <img src={homenobg} alt="logo" className='card w-20 absolute rounded-lg mt-96 saturate-200 glass '/>
      </Link>

      {/* <Link to="/app/AndreBot">
      <img src={andrenobg} alt="logo" className='card w-20 absolute rounded-lg mt-96 saturate-200 glass '/>
      </Link> */}

      


      </div>



      {/* <Link to="/">Home</Link> */}
      {/* <section className="glass btn-wide w-full btn-sm btn-outline absolute bottom-0 text-white text-center opacity-70 h-24"><Link to="/">Teste</Link></section> */}
    </div>
  
    
  )
}

export default Apps