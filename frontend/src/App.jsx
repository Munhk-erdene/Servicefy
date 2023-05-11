import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import HomeLogged from "./pages/HomeLogged";
import PostJump from "./pages/PostJump";
import Repair from "./pages/Repair";
import Relax from "./pages/Relax";
import Travel from "./pages/Travel";
import Massage from "./pages/Massage";
import Health from "./pages/Health";
import Franchise from "./pages/Franchise";
import Search from "./pages/Search";
export const instance = axios.create({
  baseURL: "http://localhost:6969",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/:_id" element={<HomeLogged />} />
          <Route path="/:_id/:search" element={<Search />} />
          <Route path="/Post/:id" element={<PostJump />}></Route>
          <Route path="Repair" element={<Repair />}></Route>
          <Route path="Massage" element={<Massage />}></Route>
          <Route path="Relax" element={<Relax />}></Route>
          <Route path="Travel" element={<Travel />}></Route>
          <Route path="Health" element={<Health />}></Route>
          <Route path="Franchise" element={<Franchise />}></Route>
          <Route path="AboutUs" element={<AboutUs />}></Route>
          <Route path="Rate" element={<PostRate />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
