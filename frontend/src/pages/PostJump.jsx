import React from "react";
import { useState } from "react";
import { instance } from "../App";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import CommentMap from "../components/CommentMap";
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
  }, []);
  return (
    <div>
      <div>name:{data && data.title}</div>
      <div>
        {value &&
          value.map((value) => {
            return <CommentMap value={value && value} key={value} />;
          })}
      </div>
    </div>
  );
}

export default PostJump;
