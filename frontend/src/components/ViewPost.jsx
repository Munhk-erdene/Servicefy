import { useEffect } from "react";
import { useState } from "react";
import { instance } from "../App";
import PostMap from "./PostMap";
const ViewPost = () => {
  const [data, setData] = useState();
  const getData = async () => {
    const res = await instance.get(`/Post`);
    setData(res.data.data);
  };

  useEffect(() => {
    getData();
  }, [data]);
  return (
    <div>
      {data &&
        data.map((data) => {
          return <PostMap value={data && data} />;
        })}
    </div>
  );
};
export default ViewPost;
