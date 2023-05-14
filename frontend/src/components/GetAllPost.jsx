import React from "react";
import { useState } from "react";
import { useEffect } from "react";
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
function GetAllPost() {
  const [data, setData] = useState();
  const getData = async () => {
    const res = await instance.get(`/Post`);
    setData(res.data.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={styles.container}>
      <img
        style={styles.ad}
        src="https://i0.wp.com/thelatzreport.com.au/wp-content/uploads/2019/09/Classified-Placeholder-300_160.png?fit=300%2C160&ssl=1"
        alt="https://i0.wp.com/thelatzreport.com.au/wp-content/uploads/2019/09/Classified-Placeholder-300_160.png?fit=300%2C160&ssl=1"
      />
      <div style={styles.map}>
        {data &&
          data.map((data) => {
            return (
              <div style={styles.helper}>
                <img
                  style={styles.img}
                  src={data && data.img}
                  alt={data && data.img}
                />
                <div style={styles.helperHelper}>
                  <div style={styles.title}>{data && data.title}</div>
                  <div style={styles.logo}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="20"
                      fill="currentColor"
                      class="bi bi-chat-left-dots"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                      <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>
                    <div style={{ marginTop: "-4px", marginLeft: "5px" }}>
                      {data && data.comment.length}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default GetAllPost;
