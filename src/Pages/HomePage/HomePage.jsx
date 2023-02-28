import { useContext, useEffect  } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import maispace from "../../Image/maispace.png";
import Blober from '../../components/Blober'

function HomePage() {
  const { loggedIn } = useContext(AuthContext);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!?";


  useEffect(() => {
    const yourAi = document.querySelector('.yourAi');
    const playground = document.querySelector('.playgroundHome');

    let yourAiInterval = null;
    let playgroundInterval = null;

    const startEffect = (target, text) => {
      let iteration = 0;
      clearInterval(target.interval);

      target.interval = setInterval(() => {
        target.innerText = target.innerText
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join('');

        if (iteration >= text.length) {
          clearInterval(target.interval);
        }
        iteration += 1 / 3;
      }, 30);
    };

    yourAiInterval = setInterval(() => {
      startEffect(yourAi, 'Your AI');
    }, 2500);

    playgroundInterval = setInterval(() => {
      startEffect(playground, 'Playground!');
    }, 2500);

    return () => {
      clearInterval(yourAiInterval);
      clearInterval(playgroundInterval);
    };
  }, []);


  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
     <Blober/>
      <img src={maispace} alt="logo" className=" maiLogo w-48 mb-8 md:mb-16 mt-8 " />

      <nav className="w-full flex justify-center md:justify-start md:ml-10 mb-8 md:mb-0 myNav">
        <ul className="navUl flex flex-row space-x-8">
          <Link to='/'><li className="homeHome font-medium text-lg md:text-xl text-[#66b1d6] hover:text-[#4e98bd] transition duration-300 ease-in-out underline">HOME</li></Link>
          <Link to='/about'><li className="font-medium text-lg md:text-xl text-black hover:text-[#53595c] transition duration-300 ease-in-out">ABOUT</li></Link>
          {!loggedIn && (
            <Link to='/signup'><li className="font-medium text-lg md:text-xl text-black hover:text-[#53595c] transition duration-300 ease-in-out">SIGN UP</li></Link>
          )}
          {loggedIn && (
            <Link to='/app'><li className="font-medium text-lg md:text-xl text-black hover:text-[#53595c] transition duration-300 ease-in-out">PLAYGROUND</li></Link>
          )}
        </ul>
      </nav>
            
      <h1 className="yourAi font-bold text-4xl md:text-6xl text-center text-[#66b1d6] md:mb-16 transition duration-300 transform hover:scale-105">Your AI</h1>
      <h1 className="playgroundHome font-bold text-4xl md:text-6xl text-center text-[#66b1d6] mb-8 md:mb-16 transition duration-300 transform hover:scale-105">Playground!</h1>

      <section className="mySectionHome text-center md:-mt-8">
  <p className="myPSectionHome text-black text-base md:text-lg leading-relaxed"> 
    Are you ready to explore the endless possibilities of artificial intelligence? <br/>
    With our selection of interactive apps, you can experience the power of AI<br/> firsthand.
    From generating creative writing to predicting your next big<br/> idea, our apps will surprise and delight you.
    Whether you're a seasoned<br/> tech enthusiast or a curious beginner, there's something for everyone. <br/>
  </p>
{/*   <p className="myPSectionHome text-black text-base md:text-lg leading-relaxed clickDiscover">Click "Discover now" to start your journey today.</p> */}
</section>

      <Link to='/app' className="btnHome bg-[#66b1d6] hover:bg-[#4e98bd] text-white hover:text-[#f1faff] font-bold py-2 px-6 rounded-full mt-8 mb-8 md:mb-16 md:mt-8 md:ml-1 transition duration-300 transform hover:scale-105">DISCOVER NOW</Link>
      <hr className="hrHome border-1 border-black w-1/3 md:w-1/6 md:mb-16 md:mt-8 md:ml-3"  />
            {/* <Footer/> */}
    </div>
  );
}

export default HomePage;

