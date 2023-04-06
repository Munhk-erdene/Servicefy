import React from "react";
import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const styles = {
    Body: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
    },
    BodyChild: {
      width: "500px",
      height: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "start",
      flexDirection: "column",
    },
    NikeIconCn: {
      width: "100%",
      height: "40px",
      display: "flex",
      alignItems: "center",
    },
    NikeIcon: {
      width: "60px",
      height: "60px",
    },
    h1: {
      fontFamily: "Roboto,sans-serif",
      fontSize: "28px",
      fontWeight: "400",
      marginTop: "20px",
    },
    input: {
      fontFamily: "Roboto,sans-serif",
      fontSize: "20px",
      fontWeight: "normal",
      width: "460px",
      height: "56px",
      borderRadius: "30px",
    },
    button: {
      width: "460px",
      height: "50px",
      backgroundColor: "white",
      color: "black",
      borderRadius: "5px",
    //   border: "none",
      fontSize: "20px",
      fontWeight: "650",
      marginTop: "10px",
    },
  };
  return (
    <>
      {/* <ToastContainer /> */}
      <div style={styles.Body}>
        <div style={styles.BodyChild}>
          <div style={styles.NikeIconCn}>
            <Link to="/">
              <img
                src="https://scontent.fuln2-2.fna.fbcdn.net/v/t1.6435-9/164144912_227892525437339_881748644955352896_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LSqyCE8Ni5MAX_rHeo2&_nc_ht=scontent.fuln2-2.fna&oh=00_AfDO4LlGEfr75GkmppKTLcS2BYkgwhtCMQSqlR6WT_JsAw&oe=645607FC"
                alt=""
                style={styles.NikeIcon}
              />
              {/* src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAAD39/ft7e34+PhoaGhQUFDDw8PQ0NDc3Nyrq6uTk5Ovr6+7u7vKysrn5+ebm5tXV1csLCzW1tZtbW0zMzOBgYEiIiJCQkJdXV20tLRycnIQEBDx8fGZmZk8PDx8fHxJSUkXFxeKioqioqIUFBQ1NTWfOkAUAAAD9UlEQVR4nO3aa3vxShSAYSMIIaSlVdUWld3//xN3HBIJOc6sId7rub9bM4tZc9TpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE/N6T66Bw30ND7jbKV7Yc3Um2p86lvNxHtiwywcrHTyixLsS/dFXtd9V2qr90t0l2ok3B1p82CnlAp1CjDSW6oX2f7Icib9KDv14WpHiL4drbF9F+776yE91Z/rx1gp9SrXI0mjYKBO9o5BmKh8lSfWKTHO5+Kcnfr1NMvvxDvEaNlq35vu3+L0TMrvaHgIspbpmIxROFAXfdNJ3jmGac08Ew3Nr1R6ZuV3choMAn0zFw3NZTo7tZSYHdbHUFuBSIYus6ZU+Z14qg2DNDVrJhYye6zROdwjZ9L0rJkYm5ffye8p3k4oXGO3Q/NYfhOxBuKxMRaL2MD1rBnbCZaMHwcVKekmerlD82AtecRxkrD3PftmF/Rs+X2LtrRLAouGLeX4+UNTuPxOgkto4cgFoqH5WpSdUi/iK9YsFVw6do5R+FKcXbTlsHDDsLmEt31D8+2vy7JT6sfGeuylGlhYiJ+Yjz/K03v9tNLud7oNa7/hbLIqz85G+Z31060MbLTQc7fLorQSmjeDNQyzDYnHn//sKrOzVH5nVxsK0dizST8/oaw3O+V3NrlqzeCaLqsb3/xVWQ2lmsx33Z7MznseVMyaCXvldxZct2h+WVpzaB6F1k+jvdtGjQ4X0dAs3Gve2PhSaZS4+QlNfsT5T92heWC7/M7ymg51AjkNhubB+51OaV5u6013vj33vXpBT/vSfRdrrmA6b3L2PD3lNXGX8jsbFvThq+YQajJrxlZiC24dxf2r/pprL+gZ+/teknTLvurSrjSbNWO/WnOYiesNW1bRUXvkNR+aB5u73+J1OoXXXGdvwTw75znToPKQV8D4XUxH2SC9fPPrsee7rh+O1x//aWYn8i6mw6/umQiRdzEt27vkt3tA+cU0JvvGhN7F9OQcK6TtZS/mmxpV99DI48ov5lrNb/DA8ouVr/dmHlp+idBafsLvYtosZSj+LqbPSoaD1vzdqFN0vjci+ixtTnzT1pbyS8iuh5bexYzUOlrUZO1dzEzBfzyas34xr2svk1/QtvK7mAuk99fC8ksxPj4N7nMxr89wRWxt+aWY5Be07P/u+bQX/b87Xsyb0bv5bH35pf02z8/Gn7Iscqozyljaf5aW5tR/lI6O7s80PBO90v8JpgzavbiXqXNhs/Mecy8vpFe+Q/1a+E9XfDe63l9Bev3wuabOErPJInuc2vR/3CfYlzU0G079z0/fHY7aeyQCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAv+Z/HBwq9QVvQoQAAAAASUVORK5CYII=" */}
            </Link>
          </div>
          <div>
            <h1 style={styles.h1}>
              Нэвтрэхийн тулд имэйл болон хэрэглэгчийн нэрээ оруулна уу.
            </h1>
            <br />
            {/* <p>
              Mongolia{" "}
              <strong style={{ textDecoration: "underline" }}>Change</strong>
            </p> */}
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Хэрэглэгч эсвэл байгууллагын нэр"
              variant="outlined"
              style={styles.input}
              //   onChange={(e) => setFirstName(e.target.value)}
            />
            <br />
            <br />
            <TextField
              id="outlined-basic"
              label="Нууц үг"
              variant="outlined"
              style={styles.input}
              //   onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <br />
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/Register"
            >
              <strong>Шинээр хэрэглэгч үүсгэх</strong>
            </Link>
          </div>
          <button style={styles.button}>Sign In</button>
          {/* onClick={LoginPost} */}
        </div>
      </div>
    </>
  );
}

export default Login;
