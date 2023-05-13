import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { Header } from "../components/header";
import Navbar from "../components/Navbar";
import ViewPost from "../components/ViewPost";
import Ad from "../components/Ad";

const HomeLogged = () => {
  const [admin, setAdmin] = useState();

  useEffect(() => {
    checkAdmin();
  }, []);
  const checkAdmin = () => {
    if (JSON.parse(localStorage.getItem("role")) === "admin") {
      setAdmin(true);
      console.log(admin);
    } else {
      setAdmin(false);
    }
  };
  return (
    <div className="homeLogged">
      <Header />
      <Ad />
      {/* {admin ? <BodyAdmin /> : <Body />} */}
      <Navbar />
      <ViewPost />
      <Footer />
    </div>
  );
};
export default HomeLogged;
