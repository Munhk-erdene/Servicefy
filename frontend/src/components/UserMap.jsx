import React from "react";
import { useState } from "react";
const style = {
  helper: {
    display: "flex",
    alignItems: "center",
  },
  img: {
    width: "40px",
    height: "40px",
    borderRadius: "100px",
  },
  main: {
    display: "Flex",
  },
};
const UserMap = ({ value }) => {
  const [switched, setSwitched] = useState(false);
  const clickHandler = () => {
    if (switched) {
      setSwitched(false);
    } else {
      setSwitched(true);
    }
  };
  return (
    <div>
      <div style={style.main}>
        <img
          style={style.img}
          src="https://malibu.sfo3.cdn.digitaloceanspaces.com/20220903-07_sl2_512/file_9976912_512x512.webp"
          alt=""
        />
        <div style={style.helper}>
          <div>{value.username}</div>
          <div onClick={clickHandler}>{switched ? "following" : "follow"}</div>
        </div>
      </div>
    </div>
  );
};

export default UserMap;
