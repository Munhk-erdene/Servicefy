import React from "react";
import { useEffect, useState, useRef } from "react";
import Post from "./Post";
function Header() {
  const createItem = () => {
    if (createDisplay.isDisplay === false) {
      setCreateDisplay({ display: "inline", isDisplay: true });
    } else {
      setCreateDisplay({ display: "none", isDisplay: false });
    }
  };
  const [createDisplay, setCreateDisplay] = useState({
    display: "none",
    isDisplay: false,
  });
  return (
    <div>
      <button onClick={createItem}>create</button>
      <Post value={createDisplay.display} />
    </div>
  );
}

export default Header;
