import {Routes, Route} from 'react-router-dom';
 import SignUpPage from './Pages/SignUp/SignUp';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/LoginPage/LoginPage';
import './App.css';



function App() {
  return (
    <div className="App">

    <Routes>
    <Route path='/' element= {<HomePage />} />
    <Route path='/signup' element= {<SignUpPage />} />
    <Route path='/login' element= {<LoginPage />} />
    </Routes>
      
    </div>
  );
}

export default App;
