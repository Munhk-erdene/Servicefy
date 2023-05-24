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
  map: {
    display: "flex",
    flexDirection: "column",
    overflowX: "scroll",
    height: "70vh",
  },
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
  miniPost: {
    display: "flex",
    flexDirection: "row",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  render: {
    border: "0.5px solid",
    botderRadius: "8px",
    marginTop: "3vh ",
  },
  miniPostRight: {
    display: "flex",
    flexDirection: "column",
    padding: "0.2rem 0rem 0rem 1rem",
  },
  image: {
    border: "0.5px solid",
    height: "15vh",
    width: "10vw",
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
    <div style={styles.render} key={post.id}>
      <div style={styles.miniPost}>
        <img style={styles.image} src={post.img} alt={post.img} />
        <div style={styles.miniPostRight}>
          <Link style={styles.link} to={`/Post/${post.id}`}>
            {post.title}
          </Link>
          <div>{post.comment.length} Comments</div>
        </div>
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
      <div style={styles.map}>{data && data.map(renderPost)}</div>
    </div>
  );
};
export default GetAllPost;
