import React from "react";
import { instance } from "../App";
import { useState } from "react";
import { useEffect } from "react";
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
    <div>
      <div>username:{data}</div>
      <div>comment:{value && value.text}</div>
    </div>
  );
}

export default CommentMap;
