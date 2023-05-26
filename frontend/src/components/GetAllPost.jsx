import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { instance } from "../App";

const styles = {
  ad: {
    width: "100%",
    border: "0.5px solid black",
  },
  img: {
    width: "50%",
    height: "15vh",
    borderRight: "0.1px solid gray",
  },
  mapMain: {
    marginTop: "1vh",
    border: "0.1px solid gray",
    display: "Flex",
  },
  mapHelper: {
    padding: "0.1vh",
    height: "100%",
  },
  title: {
    height: "5vh",
  },
  comment: {
    display: "Flex",
    alignItems: "center",
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
    <div style={styles.mapMain} key={post.id}>
      <img style={styles.img} src={post.img} alt={post.img} />
      <div style={styles.mapHelper}>
        <div style={styles.title} className="mainHeaderStyle">
          {post.title}
        </div>
        <div>
          <div style={styles.comment}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chat-left"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            </svg>
            {post.comment.length}
          </div>
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
