import React from "react";

function Navbar() {
  const style = {
    container: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
    },
    helper: {
      marginLeft: "2vw",
    },
    text: {
      fontWeight: "bolder",
      fontSize: "16px",
    },
    image: {
      width: "300px",
      height: "200px",
    },
  };
  return (
    <div style={style.container}>
      <div style={style.helper}>
        <img
          style={style.image}
          src="https://getquickspark.com.au/wp-content/uploads/2018/10/Types-of-Electrical-Repair.jpg"
          alt=""
        />
        <div style={style.text}>REPAIR</div>
      </div>
      <div style={style.helper}>
        <img
          style={style.image}
          src="https://static.wixstatic.com/media/5bfb6f_ea37f67cad544b348df9f3d0ff40f282.jpg/v1/fill/w_628,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5bfb6f_ea37f67cad544b348df9f3d0ff40f282.jpg"
          alt=""
        />
        <div style={style.text}>FOOD</div>
      </div>
      <div style={style.helper}>
        <img
          style={style.image}
          src="https://static.wixstatic.com/media/5bfb6f_c667d0c9bd634b1aa2b29311795f3c51.jpg/v1/fill/w_630,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5bfb6f_c667d0c9bd634b1aa2b29311795f3c51.jpg"
          alt=""
        />
        <div style={style.text}>RELAX</div>
      </div>
      <div style={style.helper}>
        <img
          style={style.image}
          src="https://static.wixstatic.com/media/5bfb6f_9f2519d5fc2d41f990a10dd92eb8658d.jpg/v1/fill/w_628,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5bfb6f_9f2519d5fc2d41f990a10dd92eb8658d.jpg"
          alt=""
        />
        <div style={style.text}>TRAVEL</div>
      </div>

      <div style={style.helper}>
        <img
          style={style.image}
          src="https://images.everydayhealth.com/images/massage-therapy-guide-1440x810.jpg"
          alt=""
        />
        <div style={style.text}>MASSAGE</div>
      </div>
    </div>
  );
}

export default Navbar;
