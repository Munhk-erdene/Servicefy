import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import { instance } from "../App";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
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
    inputMain: {
      display: "flex",
      flexDirection: "column",
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
      width: "500px",
      height: "53px",
      paddingLeft: "10px",

      marginTop: "20px",
    },
    button: {
      width: "500px",
      height: "50px",
      backgroundColor: "white",
      color: "black",
      borderRadius: "5px",
      fontSize: "20px",
      fontWeight: "650",
      marginTop: "10px",
    },
  };
  const navigate = useNavigate();
  const password = useRef();
  const email = useRef();
  const LoginPost = async () => {
    try {
      const res = await instance.post("/User/Login", {
        mail: email.current.value,
        password: password.current.value,
      });
      toast("Succesfull");
      navigate("/");
      window.localStorage.setItem("token", JSON.stringify(res.data.token));
      window.localStorage.setItem("user_id", JSON.stringify(res.data.data._id));
      window.localStorage.setItem("role", JSON.stringify(res.data.data.role));
    } catch (error) {
      console.log(email.current.value);
      toast.error("Not found");
    }
  };
  return (
    <>
      <div style={styles.Body}>
        <div style={styles.BodyChild}>
          <Logo />
          <div>
            <h1 style={styles.h1}>
              Нэвтрэхийн тулд бүртгэлтэй имэйл ээ оруулна уу.
            </h1>
          </div>
          <div style={styles.inputMain}>
            <input
              style={styles.input}
              type="mail"
              placeholder="Бүртгэлтэй и-мэйл"
              ref={email}
            />
            <input
              style={styles.input}
              type="password"
              placeholder="Нууц үг"
              ref={password}
            />
          </div>
          <div>
            <br></br>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to="/Register"
            >
              <strong>Шинээр хэрэглэгч үүсгэх</strong>
            </Link>
          </div>
          <button onClick={LoginPost} style={styles.button}>
            Нэвтрэх
          </button>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Login;
