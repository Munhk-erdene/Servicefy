import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { instance } from "../App";

const styles = {
  img: {
    width: "13vh",
    height: "13vh ",
  },
  ad: {
    width: "100%",
  },
  map: {},
  helper: {
    marginTop: "10px",

    display: "flex",
    border: "0.5px solid gray",
  },
  title: {
    width: "100%",
  },
  helperHelper: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
  },
  logo: {
    display: "flex",
  },
};

const GetAllPost = () => {
  const [data, setData] = useState();
  const getData = async () => {
    const res = await instance.get("/Post");
    setData(res.data.data);
  };
  useEffect(() => {
    getData();
  }, []);

  const renderPost = (post) => (
    <div key={post.id}>
      <img
        src={post.img}
        alt={post.img}
        width="13vh"
        height="13vh"
      />
      <div>
        <Link to={`/Post/${post.id}`}>{post.title}</Link>
        <div style={{ marginTop: "-4px", marginLeft: "5px" }}>{post.comment.length}</div>
      </div>
    </div>
  );

  return (
    <div>
      <img
        style={styles.ad}
        src="https://i0.wp.com/thelatzreport.com.au/wp-content/uploads/2019/09/Classified-Placeholder-300_160.png?fit=300%2C160&ssl=1"
        alt="https://i0.wp.com/thelatzreport.com.au/wp-content/uploads/2019/09/Classified-Placeholder-300_160.png?fit=300%2C160&ssl=1"
      />
      <div style={styles.map}>
        {data && data.map(renderPost)}
      </div>
    </div>
  );
};

export default GetAllPost;