import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import Navbar from "../components/Navbar";
import ViewPost from "../components/ViewPost";

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

      {/* {admin ? <BodyAdmin /> : <Body />} */}
      <Navbar />
      <ViewPost />
      <Footer />
    </div>
  );
};
export default HomeLogged;
