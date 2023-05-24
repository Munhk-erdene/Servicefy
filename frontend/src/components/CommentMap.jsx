import { instance } from "../App";
import { useState } from "react";
import { useEffect } from "react";

const CommentMap = ({ value }) => {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const getData = async () => {
      const res = await instance.get(`/User/${value.user_id}`);
      setUsername(res.data.data.username);
      setComment(value.text);
      setImage(res.data.data.image);
    };
    getData();
  }, [value]);

  return (
    <div
      style={{
        display: "flex",
        padding: "0.5rem",
        gap: "1rem",
        justifyContent: "start",
      }}
    >
      <img
        src={image}
        alt=""
        style={{
          display: "flex",
          height: "5vh",
          width: "3vw",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "0.5px solid ",
          padding: "0.3rem 0.5rem 0.5rem 0.5rem",
          borderRadius: "1rem",
        }}
      >
        <div>{username}</div>
        <div>{comment}</div>
      </div>
    </div>
  );
};

export default CommentMap;
