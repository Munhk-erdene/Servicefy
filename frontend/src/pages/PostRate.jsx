import { useEffect } from "react";
import { useState } from "react";
import { instance } from "../App";
import { Header } from "../components/Header";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";
import PostMap from "../components/PostMap";

const PostRate = () => {
const [data, setData] = useState();
const getData = async () => {
    const res = await instance.get(`/Post`);
    const result = res.data.data
    result.sort((a,b) => Number(a.rate) - Number(b.rate)).reverse()
    setData(result);
};

useEffect(() => {
  getData();
}, []);

  const styles = {
    head:{
      display:"flex",
      alignItems: "baseline",
      gap:"30px"
    },
    top:{
      fontSize:"250%",
      paddingLeft:"10%",
      paddingTop:"3%",
    },
    link:{
      textDecoration:"none",
      color: "gray",
      fontSize:"120%"
    },
    post:{
      paddingTop:"4%",
    },
  }

  return (
    <div >
      <Header/>
      <div style={styles.head}>
        <div style={styles.top}>
          TOP POSTS
        </div>
        <div >
            <Link to="/Home" style={styles.link}>
                /Home
            </Link>
        </div>
      </div>
      <div style={styles.post}>
          {data &&
            data.map((data) => {
              return <PostMap value={data && data} />
            })}
      </div>
      <Footer/>
    </div>
  );
};
export default PostRate;