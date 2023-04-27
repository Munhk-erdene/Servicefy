import React from "react";
import "../App.css";
import { useEffect, useState } from "react";
import { instance } from "../App";
import { Link } from "react-router-dom";
function Repair() {
  const [data, setData] = useState();
  const [filtered, setFiltered] = useState();
  const getData = async () => {
    const res = await instance.get(`/Post/`);
    setData(res.data.data);
    setFiltered(
      data &&
        data.filter((e) => {
          if (e.type[0] === "") {
            return e;
          }
        })
    );
  };

  useEffect(() => {
    getData();
  }, [data]);

  return <div></div>;
}

export default Repair;
