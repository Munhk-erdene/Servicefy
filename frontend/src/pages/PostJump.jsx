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
  commentMain: {
    display: "flex",
    width: "60%",
    flexDirection: "column",
    border: "1px solid",
    padding: "40px",
    backgroundColor: "white",
    borderRadius: "10px",
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
  img: {
    width: "50px",
    height: "50px",
  },
  header: {
    display: "flex",
  },
  username: {
    display: "flex",
    alignItems: "center",
  },
  date: {
    display: "flex",
    alignItems: "center",
  },
};
function PostJump() {
  const { id } = useParams();
  const [data, setData] = useState();
  const [value, setValue] = useState();
  const [userName, setUserName] = useState();
  const getData = async () => {
    const res = await instance.get(`/Post/${id}`);
    setData(res.data.data);
    setValue(res.data.data.comment);
    const response = await instance.get(`/User/${data.user_id}`);
    setUserName(response.data.data.username);
  };
  useEffect(() => {
    getData();
  }, [data]);
  return (
    <>
      <div className="container" style={styles.container}>
        <div style={styles.post}>
          <div style={styles.header}>
            <img
              style={styles.img}
              src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg"
              alt=""
            />
            <div style={styles.username}>{userName}</div>
            <div>{data && data.date}</div>
          </div>
        </div>
        <div style={styles.commentMain}>
          {value &&
            value.map((value) => {
              return <CommentMap value={value} key={"value"} />;
            })}
        </div>
      </div>
    </>
  );
}

export default PostJump;
