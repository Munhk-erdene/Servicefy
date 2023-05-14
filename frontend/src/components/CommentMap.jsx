import React from "react";
import { instance } from "../App";
import { useState } from "react";
import { useEffect } from "react";
const styles = {
  container: {
    display: "flex",
    border: "0.5px solid #000814",
    flexDirection: "column",
    padding: "1rem 0px 1rem 1.5rem",
    borderRadius: "8px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 4px 10px 0px",
    marginTop: "1em",
  },
};
function CommentMap({ value }) {
  const [data, setData] = useState();
  const getData = async () => {
    const res = await instance.get(`/User/${value.user_id}`);
    setData(res.data.data.username);
  };
  useEffect(() => {
    getData();
  }, [data]);
  return (
    <div style={styles.container}>
      {/* <img src="" alt="" /> */}
      <div>{data}</div>
      <div>{value && value.text}</div>
    </div>
  );
}

export default CommentMap;
