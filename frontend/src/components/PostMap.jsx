import { useState } from "react";
import { instance } from "../App";
import { useRef } from "react";
import { useEffect } from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { GoComment } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import moment from "moment";

const PostMap = ({ value }) => {
  const [jump, setJump] = useState();
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
    setJump(res.data.data.id);
  };

  useEffect(() => {
    getData();
  }, [data]);
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
      border: "0.5px solid #000814",
      width: "35vw",
      marginTop: "2vh",
      borderRadius: "10px",
      padding: "0px 20px 0px 20px",
    },
    header: {
      display: "flex",
      margin: "0.2vw",
      alignItems: "center",
      gap: "10px",
    },
    date: {
      marginLeft: "10px",
    },
    none: {
      visibility: switched ? "" : "hidden",
      height: switched ? "50px" : "0px",
    },
    input: {
      width: "98.2%",
      height: "90%",
      paddingLeft: "10px",
      borderBottomWidth: "0",
      borderLeftWidth: "0",
      borderRightWidth: "0",
      borderTopWidth: "0",
      outline: "none",
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

    item: {
      display: "flex",
      alignItems: "center",
    },
    footerMain: {
      display: "flex",
      justifyContent: "space-between",

      paddingLeft: "1vw",
      paddingRight: "1vw",
    },
    locate: {
      display: "flex",
      alignItems: "center",
    },
    comment: {
      display: "flex",
      alignItems: "center",
    },
    length: {
      display: "flex",
      alignItems: "center",
    },
    commentMargin: {
      marginLeft: "0.4vw",
    },
    headerHelper: {
      display: "flex",
      gap: "4rem",
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
            <div>
              <div>{data}</div>
              {moment(value.date).format("MMMM Do YYYY, h:mm:ss a")}
            </div>
            <Rating
              name="half-rating-read"
              defaultValue={value.rate}
              precision={0.5}
              readOnly
            />
          </div>
        </div>
        <div style={style.body}>
          <div style={style.bodyHelper}>
            <div style={style.title}>{value.title}</div>
          </div>
          <hr style={{ marginBottom: "-0.1vh" }} />
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/Post/${value._id}`}
          >
            <img style={style.img} src={value.img} alt={value.img} />
          </Link>
          <hr style={{ marginTop: "-0.3vh" }} />
        </div>
        <div style={style.footer}>
          <div style={style.footerMain}>
            <div style={style.locate}>
              <CiLocationOn />
              <div>{value.locate}</div>
            </div>
            <div style={style.comment}>
              <GoComment onClick={ShowComment} />
              <div style={style.commentMargin}>comment</div>
            </div>
            <div style={style.length}>{value.comment.length} comments</div>
          </div>

          <div style={style.none}>
            <hr style={{ marginBottom: "-0.1vh" }}></hr>
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
