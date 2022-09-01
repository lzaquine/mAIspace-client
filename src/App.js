import { Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp/SignUp";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Private from "./components/Private/Private";
import Profile from "./Pages/Profile/Profile";
import Apps from "./Pages/Apps/Apps";
/* import Marv from "./Pages/Apps/Fisherman"; */
import English from "./Pages/Apps/English";
import EditProfile from "./Pages/EditProfile/EditProfile";
import Anon from "./components/Anon/Anon";
import Summarizer from "./Pages/Apps/Summarizer";
import List from "./Pages/Apps/List";
import Keypoints from "./Pages/Apps/Keypoints";
import Interview from "./Pages/Apps/Interview";
import Horrorstory from "./Pages/Apps/Horrorstory";
import Keywords from "./Pages/Apps/Keywords";
import Codequestion from "./Pages/Apps/Codequestion";
import Marv from "./Pages/Apps/Marv";
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
        {/* <Route path="/app/fisherman" element={<Marv />} /> */}
        <Route path="/app/english" element={<English />} /> {/* OK */}
        <Route path="/app/list" element={<List />} /> {/* OK */}
        <Route path="/app/summarizer" element={<Summarizer />} /> {/* OK */}
        <Route path="/app/Keypoints" element={<Keypoints />} /> {/* OK */}
        <Route path="/app/interview" element={<Interview />} /> {/* OK */}
        <Route path="/app/Horrorstory" element={<Horrorstory />} /> {/* OK */}
        <Route path="/app/Keywords" element={<Keywords />} /> {/* OK */}
        <Route path="/app/codequestion" element={<Codequestion />} /> {/* OK */}
        <Route path="/app/Marvbot" element={<Marv />} /> {/* OK */}
        <Route path="/editprofile" element={<Private> <EditProfile /> </Private>} />
      </Routes>
    </div>
  );
}

export default App;
