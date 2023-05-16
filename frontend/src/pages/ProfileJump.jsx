import { instance } from "../App";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import ProfileMap from "../components/ProfileMap";
const ProfileJump = () => {
  const styles = {
    Container: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      width: "100vw",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "5%",
    },
    imgMap: {
      display: "grid",
      justifyContent: "center",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: " 2%",
    },
    main: {
      display: "flex",
      flexDirection: "column",
      alignItems: "Center",
      justifyContent: "center",
    },
  };
  const [data, setData] = useState();
  const [length, setLength] = useState();
  const [post, setPost] = useState();
  const { id } = useParams();
  const getData = async () => {
    const res = await instance.get(`/User/${id}`);
    console.log(res);
    setData(res.data.data);
    setPost(res.data.data.post);
    setLength(res.data.data.post.length);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div style={styles.Container}>
      <div style={styles.main}>
        <div style={{ border: "0.5px solid gray" }}>
          {" "}
          <Header />
        </div>
        <h1
          style={{ fontSize: "45px", fontWeight: "bold", marginTop: "2 0px" }}
        >
          {data && data.username}
        </h1>
        {length === 1 ? (
          <div>
            {post &&
              post.map((post) => {
                return <ProfileMap value={post} />;
              })}
          </div>
        ) : (
          <div style={styles.imgMap}>
            {post &&
              post.map((post) => {
                return <ProfileMap value={post} />;
              })}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProfileJump;
