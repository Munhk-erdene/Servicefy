import React from "react";
import Footer from "../components/Footer";
import { Header } from "../components/header";
import Navbar from "../components/Navbar";
import ViewPost from "../components/ViewPost";
import Ad from "../components/Ad";
import "../App.css";

function Home() {
  return (
    <>
      <Header />
      <Ad />
      <Navbar />
      <ViewPost />
      <Footer />
    </>
  );
}

export default Home;
