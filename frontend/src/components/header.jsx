import Logo from "./Logo";
import Post from "./Post";
import { useState } from "react";
import { Link } from "react-router-dom";
const style = {
  dood: {
    border: "0.5px solid black",
    width: "100vw",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    height: "4vh",
  },
  doodItem: {
    marginLeft: "2vw",
    fontSize: "22px",
    fontFamily: "Times New Roman , Times,serif",
    cursor: "pointer",
  },

  deedSign: {
    textDecoration: "none",
    color: "black",
    fontWeight: "bolder",
    fontSize: "16px",
    marginRight: "20px",
  },
  logo: {
    marginRight: "20px",
    marginTop: "5px",
  },
  deed: {
    width: "100vw",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    height: "3vh",
  },
  helper: {
    display: "flex",
    justifyContent: "flex-end",
  },
  search: {
    marginRight: "20px",
  },
};
const headers = [
  "Home",
  "About Us",
  "Repair",
  "Massage",
  "Food",
  "Relax",
  "Traveller",
];
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
        <div style={style.deedSign}>
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
          <button onClick={createItem}>on</button>
          <input type="search" style={style.search} placeholder="Search" />
        </div>
      </div>
      <div style={style.dood}>
        {headers &&
          headers.map((el) => {
            return <div style={style.doodItem}>{el}</div>;
          })}
      </div>
      <Post value={createDisplay.display} />
    </div>
  );
};
