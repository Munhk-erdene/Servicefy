import React from "react";
import Logo from "./Logo";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
function HeaderInput() {
  const styles = {
    main: {
      width: "100vw",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#EDEDED",
      display: "flex",
      height: "4vh",
      paddingLeft: "20px",
      paddingRight: "30px",
    },
    input: {
      width: "400px",
      height: "30px",
      color: "black",
      padding: "20px",
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
  return (
    <div style={styles.main}>
      <Logo />
      <input
        ref={searchItem}
        onKeyDown={handleKeyDown}
        style={styles.input}
        type="text"
        placeholder="Try search something"
      />
    </div>
  );
}

export default HeaderInput;
