import React from "react";
import { useState } from "react";
import { instance } from "../App";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import CommentMap from "../components/CommentMap";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundSize: "cover",
    width: "100vw",
    height: "100vh",
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
  bodyImg: {
    border: "0.5px solid black",
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
      <Header />
      <div className="container" style={styles.container}>
        <div style={styles.post}>
          <div style={styles.header}>
            <img
              style={styles.img}
              src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg"
              alt=""
            />
            <div style={styles.username}>{userName}</div>
            <div style={styles.date}>{data && data.date}</div>
          </div>
          <div className="postTitle">{data && data.title}</div>
          <img
            style={styles.bodyImg}
            src={data && data.img}
            alt={data && data.img}
          />
        </div>
        {/* <div style={styles.commentMain}>
          {value &&
            value.map((value) => {
              return <CommentMap value={value} key={"value"} />;
            })}
        </div> */}
      </div>
      <div className="container" style={styles.container}></div>
    </>
  );
}

export default PostJump;
