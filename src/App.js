import { Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp/SignUp";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Private from "./components/Private/Private";
import Profile from "./Pages/Profile/Profile";
import Apps from "./Pages/Apps/Apps";
import Marv from "./Pages/Apps/Marv";
import Chat from "./Pages/Apps/Chat";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={  <SignUp /> } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Private> <Profile /> </Private>  } />
        <Route path="/app" element={<Apps />} />
        <Route path="/app/:appName" element={<Marv />} />
        <Route path="/app/:appName" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
