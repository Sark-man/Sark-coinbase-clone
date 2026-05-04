import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import AssetDetail from "./pages/AssetDetail";
import Learn from "./pages/Learn";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SignUp2 from "./pages/SignUp2";
import Profile from "./pages/profile";

function App() {
  return (
    <Router>

      <Routes>

        {/* Pages WITH navbar/footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/asset/:id" element={<AssetDetail />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/explore" element={<Explore/>} />
        </Route>

        {/* Pages WITHOUT navbar/footer */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup2" element={<SignUp2 />} />
        <Route path="/profile" element={<Profile />} />
        

      </Routes>

    </Router>
  );
}

export default App;