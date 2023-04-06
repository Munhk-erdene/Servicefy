import React from "react";
import { instance } from "../App";
import { useState } from "react";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function Register() {
  const [switched, setSwitched] = useState(false);
  const loginToSignup = () => {
    if (switched) {
      setSwitched(false);
    } else {
      setSwitched(true);
    }
  };
  const navigate = useNavigate();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const locate = useRef();
  const serviceType = useRef();
  const registerButton = async () => {
    if (!switched) {
      try {
        await instance.post("/User", {
          username: username.current.value,
          mail: email.current.value,
          password: password.current.value,
          type: "User",
        });
        toast("Succesfull");
        navigate("/Login");
      } catch (error) {
        console.log("register aldaa user");
        toast(error.response.data.error);
      }
    } else {
      if (switched) {
        try {
          await instance.post("/User", {
            username: username.current.value,
            mail: email.current.value,
            password: password.current.value,
            locale: locate.current.value,
            type: "Baigulga",
            serviceType: serviceType.current.value,
          });
          toast("Succesfull");
          navigate("/Login");
        } catch (error) {
          console.log("register aldaa baigulga");
          toast(error.response.data.error);
        }
      }
    }
  };
  const style = {
    inputMain: {
      display: "flex",
      flexDirection: "column",

      marginTop: "1vh",
      height: switched ? "28vh" : "20vh",
    },
    none: {
      marginTop: "1vh",
      height: switched ? "4vh" : "0px",
      width: "23vw",
      paddingLeft: "10px",
      visibility: switched ? "" : "hidden",
    },
    input: {
      marginTop: "1vh",
      height: "4vh",
      width: "23vw",
      paddingLeft: "10px",
    },
    title: {
      fontSize: "23px",
      fontWeight: "700",
    },
    Main: {
      display: "flex",
      width: "50vw",
      border: "1px solid blue",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    switch: {
      fontSize: "20px",
      fontWeight: "600",
      display: "flex",

      marginTop: switched ? "-23px" : "-50px",
      width: "23vw",
    },

    sumbit: {
      fontSize: "20px",
      fontWeight: "600",
      marginTop: "1vh",
      height: "3.5vh",
      width: "23vw",
    },
  };
  return (
    <div>
      <div style={style.Main}>
        <div style={style.title}>
          Шинэ {switched ? "байгууллaгa бүртгүүлэх" : "хэрэглэгч болох"}
        </div>
        <div style={style.inputMain}>
          <input
            type="text"
            placeholder={switched ? "Байгууллагын нэр" : "Хэрэглэгчийн нэр"}
            ref={username}
            style={style.input}
          />
          <input
            type="text"
            style={style.input}
            placeholder="Цахим шуудан"
            ref={email}
          />
          <input
            type="text"
            style={style.input}
            placeholder="Нууц үг"
            ref={password}
          />
          <input
            type="text"
            placeholder="Байршил"
            style={style.none}
            ref={locate}
          />
          <input
            type="text"
            placeholder="Үйлчилгээний төрөл"
            style={style.none}
            ref={serviceType}
          />
        </div>
        <div>
          <div style={style.switch} onClick={loginToSignup}>
            {switched ? "Хэрэглэгчээр бүртгүүлэх" : "Байгууллагаар бүртгүүлэх"}
          </div>
          <div>
            <Button
              style={style.sumbit}
              onClick={registerButton}
              variant="outline-primary"
            >
              {switched ? "Байгууллaга бүртгүүлэх" : "Хэрэглэгч үүсгэх"}
            </Button>{" "}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
export default Register;
