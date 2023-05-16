import { Link } from "react-router-dom";
import "../App.css"
const ProfileMap = ({ value }) => {
  const styles = {
    img: {
      width: "400px",
      height: "400px",
    },
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <div style={styles.container}>
      <Link to={`/Post/${value._id}`}>
        <img style={styles.img} src={value.img} alt={value.img} className = "hover"/>
      </Link>
    </div>
  );
};
export default ProfileMap;
