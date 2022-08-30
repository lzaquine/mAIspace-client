import { Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp/SignUp";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Private from "./components/Private/Private";
import Profile from "./Pages/Profile/Profile";
import Apps from "./Pages/Apps/Apps";
import Marv from "./Pages/Apps/Marv";
import Chat from "./Pages/Apps/Chat";
import EditProfile from "./Pages/EditProfile/EditProfile";
import Anon from "./components/Anon/Anon";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Anon> <SignUp /> </Anon>} />
        <Route path="/login" element={<Anon> <LoginPage /> </Anon>} />
        <Route path="/profile" element={<Private> <Profile /> </Private>  } />
        <Route path="/app" element={<Apps />} />
        <Route path="/app/marv" element={<Marv />} />
        <Route path="/app/chat" element={<Chat />} />
        <Route path="/editprofile" element={<Private> <EditProfile /> </Private>} />
      </Routes>
    </div>
  );
}

export default App;
