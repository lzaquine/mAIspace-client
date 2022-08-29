import { Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp/SignUp";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Private from "./components/Private/Private";
import Anon from "./components/Anon/Anon";
import Profile from "./Pages/Profile/Profile";
import Apps from "./Pages/Apps/Apps";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/app" element={<Apps />} />
      </Routes>
    </div>
  );
}

export default App;
