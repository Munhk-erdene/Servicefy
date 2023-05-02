import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    image:
      "https://getquickspark.com.au/wp-content/uploads/2018/10/Types-of-Electrical-Repair.jpg",
    text: "REPAIR",
  },
  {
    image:
      "https://static.wixstatic.com/media/5bfb6f_ea37f67cad544b348df9f3d0ff40f282.jpg/v1/fill/w_628,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5bfb6f_ea37f67cad544b348df9f3d0ff40f282.jpg",
    text: "FOOD",
  },
  {
    image:
      "https://static.wixstatic.com/media/5bfb6f_c667d0c9bd634b1aa2b29311795f3c51.jpg/v1/fill/w_630,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5bfb6f_c667d0c9bd634b1aa2b29311795f3c51.jpg",
    text: "RELAX",
  },
  {
    image:
      "https://static.wixstatic.com/media/5bfb6f_9f2519d5fc2d41f990a10dd92eb8658d.jpg/v1/fill/w_628,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5bfb6f_9f2519d5fc2d41f990a10dd92eb8658d.jpg",
    text: "TRAVEL",
  },
  {
    image:
      "https://images.everydayhealth.com/images/massage-therapy-guide-1440x810.jpg",
    text: "MASSAGE",
  },
  {
    image:
      "https://preventioncentre.org.au/wp-content/uploads/2021/12/NPHS_900x600-900x600.png",
    text: "HEALTH",
  },
];
const style = {
  container: {
    marginTop: "2vh",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    gap: "30px",
  },
  helper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    fontWeight: "bolder",
    fontSize: "16px",
    cursor: "pointer",
  },
  image: {
    width: "12vw",
    height: "14vh",
    cursor: "pointer",
  },
};

function Navbar() {
  return (
    <>
      <div style={style.container}>
        {data &&
          data.map((el) => {
            return (
              <Link
                to={`/${el.text}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                <div style={style.helper}>
                  <img style={style.image} src={el.image} alt="" />
                  <div style={style.text}>{el.text}</div>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
}

export default Navbar;
