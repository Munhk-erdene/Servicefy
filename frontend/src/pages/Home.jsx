import React from "react";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import Navbar from "../components/Navbar";
import "../App.css"
import ViewPost from "../components/ViewPost";

function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <ViewPost />
      <Footer />
    </>
  );
}

export default Home;
