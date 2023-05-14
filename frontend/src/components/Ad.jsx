import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AdTitle from "./Ad/Adtitle";

function ExampleCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "90vh" }}
          src="https://cumongol.mn/wp-content/uploads/2022/01/70177142_2769428533105764_4513908356334747648_n-1.jpg"
          alt="Nice to See You"
        />
        <Carousel.Caption>
          <AdTitle>Cu card unshdag bolloo</AdTitle>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "90vh" }}
          src="https://getwallpapers.com/wallpaper/full/9/1/4/944665-kfc-wallpapers-1920x1080-for-phone.jpg"
          alt="KFC"
        />
        <Carousel.Caption>
          <h3>KFC 3дахь өдөр болгон урамшуулал зарлана</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "90vh" }}
          src="https://static1.squarespace.com/static/580fbaac440243d8731ffc57/580fc80d46c3c44e7d4df181/618a8b86f13db249b077933e/1649190555234/Rickroll_WEBSITE.jpg?format=1500w"
          alt=""
        />
        <Carousel.Caption>{/* <h3>Third slide label</h3> */}</Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ExampleCarousel;
