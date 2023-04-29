import React from "react";
import { useState } from "react";
import { instance } from "../App";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import CommentMap from "../components/CommentMap";
// import PostJumpUserData from "../components/PostJumpUserData";
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundSize: "cover",
  },
  post: {
    display: "flex",
    width: "60%",
    borderRadius: "10px",
    flexDirection: "column",
    border: "1px solid",
    padding: "40px",
    backgroundColor: "white",
  },
};
function PostJump() {
  const { id } = useParams();
  const [data, setData] = useState();
  const [value, setValue] = useState();
  const getData = async () => {
    const res = await instance.get(`/Post/${id}`);
    setData(res.data.data);
    setValue(res.data.data.comment);
  };
  useEffect(() => {
    getData();
  }, [data]);
  return (
    <>
      <div className="container" style={styles.container}>
        <div style={styles.post}>
          {/* <PostJumpUserData value={value && value} key={value} /> */}
          <div>
            {value &&
              value.map((value) => {
                return <CommentMap value={value && value} key={value} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default PostJump;
