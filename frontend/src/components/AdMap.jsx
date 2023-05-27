import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AdTitle from "./Ad/Adtitle";

const AdMap = () => {
  const slides = [
    {
      src: "https://th.bing.com/th/id/OIP.psLUcgZpue_UBn1r38jWwQHaDt?pid=ImgDet&rs=1",
      alt: "Nice to See You",
      caption: <AdTitle>CU карт уншдаг боллоо</AdTitle>,
    },
    {
      src: "https://getwallpapers.com/wallpaper/full/9/1/4/944665-kfc-wallpapers-1920x1080-for-phone.jpg",
      alt: "KFC",
      caption: <AdTitle>KFC 3дахь өдөр болгон урамшуулал зарлана</AdTitle>,
    },
    {
      src: "https://th.bing.com/th/id/R.c6e1806687b8b2fd3a33e34afc17852c?rik=A2HNckLcjMXu%2bw&riu=http%3a%2f%2fwww.syioknya.com%2fcustom%2fpicture%2f7410%2fsyioknya1_5bb5d6f2a396a.jpg&ehk=6qh%2f5XdSV7VxdrHpzzA8Tp5GelA6u6ysmhSw6Hs6e2o%3d&risl=&pid=ImgRaw&r=0",
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

export default AdMap;
