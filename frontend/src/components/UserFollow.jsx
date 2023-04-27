import { useState } from "react";
import { instance } from "../App";
import { useEffect } from "react";
import UserMap from "./UserMap";
const UserFollow = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await instance.get(`/User`);
    setData(res.data.data);
  };
  useEffect(() => {
    getData();
  }, [data]);

  return (
    <div>
      <div>Suggestions for you</div>
      {data &&
        data.map((user) => {
          return <UserMap value={user} />;
        })}
    </div>
  );
};
export default UserFollow;
