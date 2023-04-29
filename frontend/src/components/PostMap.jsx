import { useState } from "react";
import { instance } from "../App";
import { useRef } from "react";
import { useEffect } from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
const PostMap = ({ value }) => {
  const [data, setData] = useState();
  const [switched, setSwitched] = useState(false);
  const ShowComment = () => {
    if (switched) {
      setSwitched(false);
    } else {
      setSwitched(true);
    }
  };
  const getData = async () => {
    const res = await instance.get(`/User/${value.user_id}`);
    setData(res.data.data.username);
  };
  useEffect(() => {
    getData();
  }, [data]);
  const profile = [
    {
      image:
        "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg",
    },
  ];
  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      try {
        await instance.post("/Comment", {
          text: text.current.value,
          user_id: JSON.parse(localStorage.getItem("user_id")),
          post_id: `${value._id}`,
        });
        text.current.value = "";
      } catch (error) {
        console.log("aldaa post comment");
        console.log(error);
        alert(error.response.data.data);
      }
    }
  };
  const text = useRef(null);
  const style = {
    main: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    helper: {
      border: "1px solid #949494",
      width: "35vw",
      marginTop: "2vh",
      borderRadius: "10px",
    },
    header: {
      display: "flex",
      margin: "0.2vw",
      alignItems: "center",
    },
    date: {
      marginLeft: "10px",
    },
    none: {
      visibility: switched ? "" : "hidden",
      height: "50px",
    },
    input: {
      width: "98.2%",
      height: "90%",
      paddingLeft: "10px",
    },
    image: {
      width: "50px",
      height: "50px",
    },
    img: {
      width: "100%",
      height: "35vh",
    },
    bodyHelper: {
      display: "flex",
      justifyContent: "space-between",
    },
    title: {
      marginLeft: "0.4vw",
      borderRadius: "10px",
      fontSize: "20px",
    },
    icon: {
      display: "flex",
      justifyContent: "space-between",
    },
    item: {
      display: "flex",
      alignItems: "center",
    },
    locate: {
      marginLeft: "0.2px",
      fontSize: "20px",
    },
  };
  return (
    <div style={style.main}>
      <div style={style.helper}>
        <div style={style.header}>
          <img
            src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg"
            style={style.image}
            alt=""
          />
          <div style={style.headerHelper}>
            <div>{data}</div>
            <div>{value.date}</div>
          </div>
        </div>
        <div style={style.body}>
          <div style={style.bodyHelper}>
            <div style={style.title}>{value.title}</div>
            <Rating
              name="half-rating-read"
              defaultValue={value.rate}
              precision={0.5}
              readOnly
            />
          </div>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/Post/${value._id}`}
          >
            <img style={style.img} src={value.img} alt={value.img} />
          </Link>
        </div>
        <div style={style.footer}>
          <div style={style.icon}>
            <div style={style.item}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                fill="currentColor"
                class="bi bi-geo-alt"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              <div style={style.locate}>{value.locate}</div>
            </div>
            <svg
              onClick={ShowComment}
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-chat-dots"
              viewBox="0 0 16 16"
            >
              <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
            </svg>
          </div>
          <div style={style.none}>
            <input
              style={style.input}
              ref={text}
              onKeyDown={handleKeyDown}
              type="text"
              placeholder="create a comment"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostMap;
