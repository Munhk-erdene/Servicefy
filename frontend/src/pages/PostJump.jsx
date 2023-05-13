import React from "react";
import "../App.css";
import { useState } from "react";
import { instance } from "../App";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";
import CommentMap from "../components/CommentMap";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import GetAllPost from "../components/GetAllPost";
import Rating from "@mui/material/Rating";
import FooterImage from "../components/FooterImage";
import moment from "moment";
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    backgroundSize: "cover",
    width: "70%",
  },
  commentMain: {
    display: "flex",
    width: "45vw",
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: "10px",
  },
  main: {
    width: "100vw",
    height: "100vh",
  },
  helper: {
    display: "flex",
    width: "60vh",
    flexDirection: "column",
    borderRadius: "10px",
  },
  headerHelper: {
    display: "flex",
    flexDirection: "center",
    alignItems: "center",
    width: "100%",
  },
  responsiv: {
    display: "flex",
    marginTop: "2vh",
  },
  post: {
    width: "22vw",
    height: "100%",
    marginLeft: "1%",
    overflowX: "scroll",
  },
  undsenData: {
    width: "45vw",
    display: "flex",
    flexDirection: "column",
  },
  body: {
    marginTop: "1%",
  },
  bodyImg: {
    width: "45vw",
    height: "70vh",
  },
  proImg: {
    width: "50px",
    height: "50px",
    borderRadius: "100px",
  },
  date: {
    color: "gray",
    marginLeft: "1%",
  },
  name: {
    marginLeft: "1%",
  },
  input: {
    width: "45vw",
    height: "70px",
    padding: "20px",

    backgroundColor: "#F1F1F1",
    borderBottomWidth: "0",
    borderLeftWidth: "0",
    borderRightWidth: "0",
    borderTopWidth: "0",
    borderRadius: "5px",
  },
  title: {
    fontSize: "30px",
    fontWeight: "550",
  },
  ad: {
    border: "1px solid #F1F1F1",
    fontSize: "22PX",
    padding: "25px",
  },
  logos: {
    display: "flex",
  },
  bodyHelper: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  logo: {
    marginLeft: "10px",
  },
  borderheader: {
    border: "0.1px solid black",
  },
  header: {
    display: "flex",
    flexDirection: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  CommentScroll: {
    border: "1px solid red",
    height: "70.5%",
    overflowX: "scroll",
  },
};

function PostJump() {
  const { id } = useParams();
  const [data, setData] = useState();
  const [value, setValue] = useState();
  const [userName, setUserName] = useState();
  const text = useRef(null);
  const getData = async () => {
    const res = await instance.get(`/Post/${id}`);
    setData(res.data.data);
    setValue(res.data.data.comment);
    const response = await instance.get(`/User/${data.user_id}`);
    setUserName(response.data.data.username);
  };

  useEffect(() => {
    getData();
  }, [data && data.rate]);
  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      try {
        await instance.post("/Comment", {
          text: text.current.value,
          user_id: JSON.parse(localStorage.getItem("user_id")),
          post_id: `${data && data._id}`,
        });
        text.current.value = "";
      } catch (error) {
        console.log("aldaa post comment");
        console.log(error);
        alert(error.response.data.data);
      }
    }
  };

  return (
    <div style={styles.main}>
      <div style={styles.borderheader}>
        <Header />
      </div>
      <div style={styles.responsiv}>
        <div style={styles.container}>
          <div style={styles.undsenData}>
            <div style={styles.header}>
              <div style={styles.headerHelper}>
                {" "}
                <img
                  style={styles.proImg}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEXk5ueutLepsLPo6uursbXJzc/p6+zj5ea2u76orrKvtbi0ubzZ3N3O0dPAxcfg4uPMz9HU19i8wcPDx8qKXtGiAAAFTElEQVR4nO2d3XqzIAyAhUD916L3f6+f1m7tVvtNINFg8x5tZ32fQAIoMcsEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQTghAJD1jWtnXJPP/54IgNzZQulSmxvTH6oYXX4WS+ivhTbqBa1r26cvCdCu6i0YXbdZ0o4A1rzV+5IcE3YE+z58T45lqo7g1Aa/JY5tgoqQF3qb382x7lNzBLcxft+O17QUYfQI4IIeklKsPSN4i6LKj/7Zm8n99RbHJpEw9gEBXNBpKIYLJqKYRwjOikf//r+J8ZsVuacbqCMNleI9TqGLGqMzhnVdBOdd6F/RlrFijiCoVMk320CBIahUxTWI0KKEcJqKbMdpdJb5QvdHq6wCI5qhKlgGMS/RBHkubWDAE+QZxB4xhCyDiDkLZxgGEVdQldzSKbTIhmZkFkSEPcVvmBn2SMuZB9od7fQDsMiDdKJjFUSCQarM5WirZ3C2TT/htYnyPcPfgrFHWz0BI74gr6J/IZiGUxAZGQLqmvQLTrtE/Go4YxhVRIpEw+sww1IIcqr5NKmUUzLF3d4/qPkYIp2T/obPuemlojFUR4t9Q2Vojhb7BmgElWHzLPH8hucfpefPNFTVgs9h1AdU/Pin96vwWbWdf+X9Absn3OdO34aMdsDnP8WgKYisTqI6CkNGqZQo1XA6Ef6AU32SJzOcBukHPF07/xNSgmHKa5BOhtezv6mA/rYJpwXNAnbRZ1XuF3BzDcO3vpA3+ny2909gbqE4hhD3LIPhLLyBNhPZvbZ3B+3tPYa18A7auSlXQayKwTPNLKDcuOB0xPYKDPFTkWsevQPRZ1J8Hji9I1KQ34r7hZhrwNwOZ97QxNx0drwn4QI0wQk1DcEsfKCWKdxVvxPSNUIp/knmAXT+nT+Ko3+0H96rcNb3m1fx7MBTJdeBJ7uFcWsc0wvgAsC4pROW0l2inbAmIBv/7GZmuhQH6API2rr8T0e6yuZJ+80A9LZeG62T3tik31XwxtwZcizKuTHkMjB1WdZde4Kmic/A5ZI3rr1ae21d08PlVHYfAaxw9G9CYRbJ+8ZdbTcMRV1XM3VdF0M32vtoTdZ0+u29s0OttJ5bz64UwinjaFMVY9vkqc3KKSxN21Xl+0L4Q3Vuv1tYl0pqnX6ms4XetFz7gdZVAgUEoJntfOUe4ZwsHd9FzqQ3Vv6xe41l0XJcqcKl6TZvlv7ClAW3BsqQW4X7ypApB8dmTgK4IX5wvqIVj33HtD2qSG4BqznxdIefL27Y4sahi0MdIdvUsDva8agGGbCtITmCY31MHD2O0uIdh/0rJDQ1VX5Zdxz3rR2QDbv6qXl9vudzqQtGm1Jv9LDXOsfvvB7VcZ8PDKD0mQ1VHPYQ9O+Yj4hR1IUD8rBnn3ho2m8oQMxbCFiKlL2ioSW5heeJqegED52CzxCtcGD3Kv8Wms9EYLyUhwaFIhSMBClevWEmiK/Iaogu4H7sg6ppQhQG8RUqivuTGOAJOg6FfgW0q0M0PQMRMEgXaeNf3SYDZ8PIMI0+wHgr/MgN7wYwpiLjCCqM6ydUDZLQiB6nDdNC8SDyig3jPPpFXGcC9O8BUBDVmgBY59E7Md/35Loe/UVEECEJwYggJjELZ4J71SaQSBeC02n4Da29CayJNA28SAhd2CQyC1Xw6pSmGSINQVuMhAZp4DClan9MgmkDDNmezqwS8sgtlXK/EPBhoaSmYVC/F7IO1jQEdHOlabpKh3+jzLQSTUiq4X2I+Ip/zU8rlaqAvkS21ElR+gqu3zbjjL+hIAiCIAiCIAiCIAiCsCf/AKrfVhSbvA+DAAAAAElFTkSuQmCC"
                  alt=""
                />
                <div style={styles.name}>{userName}</div>
                <div style={styles.date}>
                  {moment(data && data.date).format("MMMM Do YYYY, h:mm:ss a")}
                </div>
              </div>

              <Rating
                name="half-rating-read"
                defaultValue={data && data.rate}
                precision={0.5}
                readOnly
              />
            </div>
            <div style={styles.body}>
              <div className="postJumpTitle" style={styles.title}>
                {data && data.title}
              </div>
              <img
                style={styles.bodyImg}
                src={data && data.img}
                alt={data && data.img}
              />
              <div className="postJumpAd" style={styles.ad}>
                “Do you have a design in mind for your blog ? Whether you prefer
                a trendy postcard look or you’re going for a more editorial
                style blog - there’s a stunning layout for everyone . You’ll be
                posting loads of engaging content, so be sure to keep your blog
                organized with Categories that also allow visitors to explore
                more of what interests them.”
              </div>
              <div>{data && data.text}</div>
              <hr></hr>
              <div style={styles.bodyHelper}>
                {" "}
                <div style={styles.logos}>
                  {" "}
                  <div style={styles.logo}>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      fill="currentColor"
                      class="bi bi-twitter"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </div>
                  <div style={styles.logo}>
                    {" "}
                    <svg
                      style={styles.logo}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-instagram"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </div>
                  <div style={styles.logo}>
                    {" "}
                    <svg
                      style={styles.logo}
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      fill="currentColor"
                      class="bi bi-youtube"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                    </svg>
                  </div>
                </div>
                <div>{data && data.type}</div>
              </div>
              <hr></hr>
            </div>
          </div>
          <div style={styles.commentMain}>
            <input
              style={styles.input}
              placeholder="Сэтгэгдлээ бичнэ үү"
              ref={text}
              onKeyDown={handleKeyDown}
            />
            <div style={styles.CommentScroll}>
              {value &&
                value.map((data) => {
                  return <CommentMap value={data} />;
                })}
            </div>
          </div>
        </div>
        <div style={styles.post}>
          <GetAllPost />
        </div>
      </div>
      <div style={{ marginTop: "5%" }}>
        {" "}
        <FooterImage />
        <Footer />
      </div>
    </div>
  );
}

export default PostJump;
