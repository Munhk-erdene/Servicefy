import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  const Remove = () => {
    window.localStorage.clear();
  };
  return (
    <Link to="/" onClick={Remove}>
      <img
        src="https://scontent.fuln2-2.fna.fbcdn.net/v/t1.6435-9/164144912_227892525437339_881748644955352896_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LSqyCE8Ni5MAX_rHeo2&_nc_ht=scontent.fuln2-2.fna&oh=00_AfDO4LlGEfr75GkmppKTLcS2BYkgwhtCMQSqlR6WT_JsAw&oe=645607FC"
        alt=""
        style={{ width: "50px", height: "50px" }}
      />
    </Link>
  );
}

export default Logo;
