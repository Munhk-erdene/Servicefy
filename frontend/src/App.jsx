import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";
import Login from "./pages/Login";
import HomeLogged from "./pages/HomeLogged";
import PostPage from "./pages/PostPage";
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
          <Route path={"/about"} element={<AboutUs/>}></Route>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/:_id" element={<HomeLogged />} />
          <Route path="/Post" element={<PostPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
