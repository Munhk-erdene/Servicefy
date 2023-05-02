import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { instance } from "../App";
import Select from "react-select";

export default function Post({ value }) {
  const [rate, SetRate] = useState("");
  const [type, setType] = useState("");
  const handleChange = (rate) => {
    SetRate(rate.value);
  };
  const handleChanges = (type) => {
    setType(type.value);
  };

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
  // const postData = useRef({});
  // postData.current = {...postData.current, rate:45}
  const rates = [
    { value: "0.5", label: "0.5" },
    { value: "1", label: "1" },
    { value: "1.5", label: "1.5" },
    { value: "2", label: "2" },
    { value: "2.5", label: "2.5" },
    { value: "3", label: "3" },
    { value: "3.5", label: "3.5" },
    { value: "4", label: "4" },
    { value: "1.5", label: "4.5" },
    { value: "5", label: "5" },
  ];
  const types = [
    { value: "Repair", label: "Repair" },
    { value: "Relax", label: "Relax" },
    { value: "Travel", label: "Travel" },
    { value: "Franchise", label: "Franchise" },
    { value: "Massage", label: "Massage" },
    { value: "Health", label: "Health" },
  ];

  const text = useRef();
  const title = useRef();
  const locate = useRef();
  const name = useRef();
  const img = useRef();
  const price = useRef();
  const createPost = async () => {
    try {
      await instance.post("/Post", {
        rate: rate,
        type: type,
        img: img.current.value,
        text: text.current.value,
        title: title.current.value,
        locate: locate.current.value,
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
    <div style={style.container}>
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
            ref={locate}
            type="text"
            placeholder="locate"
          />
          <input
            style={style.input}
            ref={img}
            type="text"
            placeholder="image"
          />
          <input
            style={style.input}
            ref={price}
            type="number"
            placeholder="price"
          />
          <input
            style={style.input}
            ref={text}
            type="text"
            placeholder="text"
          />
          <input
            style={style.input}
            ref={name}
            type="text"
            placeholder="baigulga name"
          />
          <div style={{ width: "300px" }}>
            <Select
              onChange={handleChange}
              placeholder="rate"
              options={rates}
            />
          </div>
          <div style={{ width: "300px" }}>
            <Select
              onChange={handleChanges}
              placeholder="type"
              options={types}
            />
          </div>
          <button onClick={createPost}>post</button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
