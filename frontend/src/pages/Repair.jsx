import React from "react";
import "../App.css";
import { useEffect, useState } from "react";
import { instance } from "../App";
import { Link } from "react-router-dom";
import JumpItems from "../components/JumpItems";
import { Header } from "../components/Header";
function Repair() {
  const [data, setData] = useState();
  const [filtered, setFiltered] = useState();
  const getData = async () => {
    const res = await instance.get(`/Post`);
    setData(res.data.data);
    setFiltered(
      data &&
        data.filter((el) => {
          if (el.type === "Repair") {
            return el;
          }
        })
    );
  };

  useEffect(() => {
    getData();
  }, [data]);

  return (
    <div>
      <Header />

      {filtered &&
        filtered.map((el) => {
          return <JumpItems value={el} />;
        })}
    </div>
  );
}

export default Repair;
