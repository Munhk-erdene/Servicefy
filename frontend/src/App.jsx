import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import HomeLogged from "./pages/HomeLogged";
import PostPage from "./pages/PostPage";
import PostJump from "./pages/PostJump";
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
          <Route path="/Post" element={<PostPage />}></Route>
          <Route path="/Post/:id" element={<PostJump />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
