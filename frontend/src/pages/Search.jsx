import React from "react";
import { useState } from "react";
import { instance } from "../App";
import { useParams } from "react-router-dom";
import SearchMap from "../components/SearchMap";
import SearchMapUser from "../components/SearchMapUser";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
function Search() {
  const [alignment, setAlignment] = React.useState("");
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const [data, setData] = useState();
  const { search } = useParams();
  const [user, setUser] = useState();
  const getData = async () => {
    const res = await instance.get("/Post");
    setData(res.data.data);
    setUser("");
  };
  const getUser = async () => {
    const response = await instance.get("/User");
    setUser(response.data.data);
    setData("");
  };
  return (
    <div>
      <div>Search</div>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton onClick={getUser} value="user">
          User
        </ToggleButton>
        <ToggleButton onClick={getData} value="post">
          Post
        </ToggleButton>
      </ToggleButtonGroup>
      <div>
        {data &&
          data.map((data) => {
            if (data && data.title.includes(search)) {
              return <SearchMap value={data} />;
            } else {
            }
          })}
      </div>
      <div>
        {user &&
          user.map((user) => {
            if (user && user.username.includes(search)) {
              return <SearchMapUser value={user} />;
            } else {
            }
          })}
      </div>
    </div>
  );
}

export default Search;
