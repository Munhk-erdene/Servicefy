import Logo from "./Logo";
import Post from "./Post";
import { useState } from "react";
import { Link } from "react-router-dom";
const style = {
  dood: {
    width: "100vw",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    height: "6vh",
    backgroundColor: "#fff"
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
    backgroundColor:"#EDEDED",
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
    width: "100px",
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
  return (
    <div>
      <div style={style.deed}>
        <div style={style.logo}>
          <Logo />
        </div>
        <div style={style.helper}>
          <input type="search" style={style.search} placeholder="Search" />
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
        </div>
      </div>
      <div style={style.dood}>
        <div className="headerNames">Home</div>
        <div className="headerNames">About us</div>
        <Link to="/Repair" style={{ textDecoration: "none", color: "black" }}>
          {" "}
          <div className="headerNames">Repair</div>
        </Link>
        <div className="headerNames">Relax</div>
        <div className="headerNames">Massage</div>
        <div className="headerNames">Travel</div>
        <div className="headerNames">Food</div>
      </div>
      <Post value={createDisplay.display} />
    </div>
  );
};
