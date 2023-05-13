import { instance } from "../App";
import { useState } from "react";
import { useEffect } from "react";

const CommentMap = ({ value }) => {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    const getData = async () => {
      const res = await instance.get(`/User/${value.user_id}`);
      setUsername(res.data.data.username);
      setComment(value.text);
    };
    getData();
  }, [value]);

  return (
    <div>
      <div>{username}</div>
      <div>{comment}</div>
    </div>
  );
};

export default CommentMap;