import { useState } from "react";
import { instance } from "../App";
import { useRef } from "react";
import { useEffect } from "react";
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
    console.log(data);
  };
  useEffect(() => {
    getData();
  }, [data]);
  const style = {
    main: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    helper: {
      border: "1px solid black",
      width: "500px",
    },
    header: {
      display: "flex",
    },
    date: {
      marginLeft: "10px",
    },
    none: {
      visibility: switched ? "" : "hidden",
    },
  };
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

  return (
    <div style={style.main}>
      <div style={style.helper}>
        {" "}
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={`/Post/${value._id}`}
        >
          <div style={style.header}>
            {" "}
            <div>{data}</div>
            <div style={style.date}>{value && value.date}</div>
          </div>
        </Link>
        <div>{value && value.title}</div>
        <img src={value && value.img} alt={value && value.img} />
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
        <div style={style.none}>
          <input
            ref={text}
            onKeyDown={handleKeyDown}
            type="text"
            placeholder="create a comment"
          />
        </div>
      </div>
    </div>
  );
};

export default PostMap;
