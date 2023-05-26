import { instance } from "../App";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import ProfileMap from "../components/ProfileMap";
import MainHeader from "../components/mainHeader";
const ProfileJump = () => {
  const styles = {
    Container: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      width: "100vw",
    },
    imgMap: {
      display: "grid",
      justifyContent: "center",
      gridTemplateColumns: "1fr 1fr 1fr",
    },
    main: {
      display: "flex",
      flexDirection: "column",
    },
    helper: {
      height: "90vh",
      display: "flex",
      justifyContent: "center",
      marginTop: "6vh",
    },
    profileMain: {
      height: "70vh",
      border: "1px solid black",
      width: "20vw",
      marginRight: "5vw",
      padding: "90",
    },
    header: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
    profileImage: {
      width: "11vw",
      height: "11vw",
      borderRadius: "100px",
      display: "flex",

      flexDirection: "column",
    },
    profileName: {
      fontSize: "35px",
      fontWeight: "600",
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
      <MainHeader></MainHeader>
      <div style={styles.helper}>
        <div style={styles.profileMain}>
          <div style={styles.header}>
            <img
              className="instagram"
              style={styles.profileImage}
              src={data && data.image}
              alt={data && data.image}
            />
            <div style={styles.profileName}>{data && data.username}</div>
          </div>
          <div style={styles.body}>
            <div>{data && data.mail}</div>
          </div>
        </div>
        <div style={styles.main}>
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
      </div>
      <Footer />
    </div>
  );
};

export default ProfileJump;
