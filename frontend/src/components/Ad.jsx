import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AdTitle from "./Ad/Adtitle";

const ExampleCarousel = () => {
  const slides = [
    {
      src: "https://cumongol.mn/wp-content/uploads/2022/01/70177142_2769428533105764_4513908356334747648_n-1.jpg",
      alt: "Nice to See You",
      caption: <AdTitle>CU карт уншдаг боллоо</AdTitle>,
    },
    {
      src: "https://getwallpapers.com/wallpaper/full/9/1/4/944665-kfc-wallpapers-1920x1080-for-phone.jpg",
      alt: "KFC",
      caption: <AdTitle>KFC 3дахь өдөр болгон урамшуулал зарлана</AdTitle>,
    },
    {
      src: "https://via.placeholder.com/800x400?text=Slide+3",
      alt: "Third slide",
      caption: <AdTitle>Third slide label</AdTitle>,
    },
  ];

  return (
    <Carousel>
      {slides.map((slide) => (
        <Carousel.Item key={slide.src}>
          <img
            className="d-block w-100"
            style={{ height: "95vh" }}
            src={slide.src}
            alt={slide.alt}
          />
          <Carousel.Caption>{slide.caption}</Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ExampleCarousel;
