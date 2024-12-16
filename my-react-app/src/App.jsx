import { createClient } from "@supabase/supabase-js";
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Feed } from "./pages/Feed";

function App() {

  return (
    <>
    <div>
      <Router>
        <div id="Nav">
          <Link to="/" id="Space">  Register  </Link>
          <Link to="/login" id="Space">  Login  </Link>
          <Link to="/profile" id="Space">  Profile  </Link>
          <Link to="/feed" id="Space">  Feed  </Link>
        </div>
        <Routes>
          <Route path="/" element={<Register />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App
