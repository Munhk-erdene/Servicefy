import { useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Post from "./Post";
const MainHeader = () => {
  const styles = {
    main: {
      display: "flex",
      height: "6vh",
      justifyContent: "space-between",
      backgroundColor: "black",
      alignItems: "center",

      width: "100vw",
      paddingLeft: "3vw",
      paddingRight: "3vw",
    },
    text: {
      color: "white",
      marginLeft: "2vw",
      fontSize: "20pxs",
    },
    left: {
      display: "Flex",
    },
    right: {
      display: "Flex",
      alignItems: "center",
    },
    search: {
      borderRadius: "10px",
      width: "30wh",
      height: "4vh",
      color: "black",
      paddingLeft: "10%",
      marginLeft: "1vw",
    },
    none: {
      display: "none",
    },
  };
  const navigate = useNavigate();
  const searchItem = useRef();
  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      try {
        navigate(
          `/${JSON.parse(localStorage.getItem("user_id"))}/${
            searchItem.current.value
          }`
        );
        searchItem.current.value = "";
      } catch (error) {
        console.log(error);
      }
    }
  };
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
  console.log(createDisplay);
  return (
    <>
      <div style={styles.main}>
        <div style={styles.left}>
          <div className="mainHeaderStyle" style={styles.text}>
            Home{" "}
          </div>
          <div className="mainHeaderStyle" style={styles.text}>
            Profile
          </div>
          <div className="mainHeaderStyle" style={styles.text}>
            Contact
          </div>
          <div className="mainHeaderStyle" style={styles.text}>
            About us
          </div>
          <div className="mainHeaderStyle" style={styles.text}>
            Top
          </div>
          <div className="mainHeaderStyle" style={styles.text}>
            Buy Ad
          </div>
        </div>
        <div style={styles.right}>
          <div
            onClick={createItem}
            style={{ color: "white", fontSize: "40px" }}
          >
            +
          </div>
          <input
            onKeyDown={handleKeyDown}
            ref={searchItem}
            type="search"
            style={styles.search}
            placeholder="Search"
          />
        </div>
      </div>
      <Post style={styles.none} value={createDisplay.display} />
    </>
  );
};
export default MainHeader;
