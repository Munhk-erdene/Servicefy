import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { instance } from "../App";
export default function Post({ value }) {
  const style = {
    main: {
      display: value,
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
    },
    inputMain: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    input: {
      width: "400px",
    },
  };
  const rate = useRef();
  const text = useRef();
  const title = useRef();
  const locate = useRef();
  const date = useRef();
  const name = useRef();
  const img = useRef();
  const price = useRef();
  const createPost = async () => {
    try {
      await instance.post("/Post", {
        rate: rate.current.value,
        img: img.current.value,
        text: text.current.value,
        title: title.current.value,
        locate: locate.current.value,
        date: date.current.value,
        name: name.current.value,
        price: price.current.value,
        token: JSON.parse(localStorage.getItem("token")),
        user_id: JSON.parse(localStorage.getItem("user_id")),
      });
      toast("Succesfull");
      console.log();
    } catch (error) {
      console.log("aldaa post user");
      console.log(error);
      toast.error("Nevter");
    }
  };
  return (
    <div style={style.main}>
      <div style={style.inputMain}>
        <input
          style={style.input}
          ref={title}
          type="text"
          placeholder="title"
        />
        <input
          style={style.input}
          ref={date}
          type="datetime-local"
          placeholder="date"
        />
        <input
          style={style.input}
          ref={locate}
          type="text"
          placeholder="locate"
        />
        <input style={style.input} ref={img} type="text" placeholder="image" />
        <input
          style={style.input}
          ref={price}
          type="number"
          placeholder="price"
        />
        <input style={style.input} ref={text} type="text" placeholder="text" />
        <input
          style={style.input}
          ref={name}
          type="text"
          placeholder="baigulga name"
        />
        <input
          style={style.input}
          ref={rate}
          type="number"
          placeholder="rate"
        />
        <button onClick={createPost}>post</button>
      </div>
      <ToastContainer />
    </div>
  );
}
