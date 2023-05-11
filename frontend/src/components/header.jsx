import Logo from "./Logo";
import Post from "./Post";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const style = {
  dood: {
    width: "100vw",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    height: "6vh",
    backgroundColor: "#fff",
  },
  deedSign: {
    fontWeight: "bolder",
    marginRight: "20px",
  },
  logo: {
    marginRight: "20px",
    marginTop: "5px",
    width: "30px",
    height: "30px",
  },
  deed: {
    width: "100vw",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#EDEDED",
    display: "flex",
    height: "4vh",
  },
  helper: {
    display: "flex",
    justifyContent: "flex-end",
  },
  search: {
    marginRight: "20px",
    height: "27px",
    width: "200px",
  },
  button: {
    border: "none",
  },
};
export const Header = () => {
  const [createDisplay, setCreateDisplay] = useState({
    display: "none",
    isDisplay: false,
  });
  const createItem = () => {
    if (createDisplay.isDisplay === false) {
      setCreateDisplay({ display: "inline", isDisplay: true });
    } else {
      setCreateDisplay({ display: "none", isDisplay: false });
    }
  };
  const navigate = useNavigate();
  const searchItem = useRef();
  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      try {
        navigate(`./${searchItem.current.value}`);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div>
      <div style={style.deed}>
        <div style={style.logo}>
          <Logo />
        </div>
        <div style={style.helper}>
          <Link style={{ textDecoration: "none", color: "black" }} to="/Login">
            <div style={style.deedSign}>SIGN IN</div>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/Register"
          >
            <div style={style.deedSign}>SIGN UP</div>
          </Link>
          <button style={style.button} onClick={createItem}>
            Post!
          </button>
          <input
            onKeyDown={handleKeyDown}
            ref={searchItem}
            type="search"
            style={style.search}
            placeholder="Search"
          />
        </div>
      </div>
      <div style={style.dood}>
        <Link
          to={`/${JSON.parse(localStorage.getItem("user_id"))}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="headerNames">Home</div>
        </Link>
        <div className="headerNames">About us</div>
        <Link to="/Massage" style={{ textDecoration: "none", color: "black" }}>
          {" "}
          <div className="headerNames">Massage</div>
        </Link>
        <Link to="/Travel" style={{ textDecoration: "none", color: "black" }}>
          {" "}
          <div className="headerNames">Travel</div>
        </Link>
        <Link
          to="/Franchise"
          style={{ textDecoration: "none", color: "black" }}
        >
          {" "}
          <div className="headerNames">Franchise</div>
        </Link>
        <Link to="/Repair" style={{ textDecoration: "none", color: "black" }}>
          {" "}
          <div className="headerNames">Repair</div>
        </Link>
        <Link to="/Relax" style={{ textDecoration: "none", color: "black" }}>
          {" "}
          <div className="headerNames">Relax</div>
        </Link>
        <Link to="/Health" style={{ textDecoration: "none", color: "black" }}>
          {" "}
          <div className="headerNames">Health</div>
        </Link>
      </div>
      <Post value={createDisplay.display} />
    </div>
  );
};
