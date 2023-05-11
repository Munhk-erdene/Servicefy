import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ExampleCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={30}>
        <img
          className="d-block w-100"
          style={{ height: "90vh" }}
          src="https://static.wixstatic.com/media/5bfb6f_c667d0c9bd634b1aa2b29311795f3c51.jpg/v1/fill/w_630,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5bfb6f_c667d0c9bd634b1aa2b29311795f3c51.jpg"
          alt="Nice to See You"
        />
        <Carousel.Caption>
          <h3>CU карт уншдаг боллоо</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={30}>
        <img
          className="d-block w-100"
          style={{ height: "90vh" }}
          src="data:image/jpeg;base64,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"
          alt="KFC"
        />
        <Carousel.Caption>
          <h3>KFC 3дахь өдөр болгон урамшуулал зарлана</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={30}>
        <img
          className="d-block w-100"
          style={{ height: "90vh" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4H8tgVcu0gQ1YwRDstqajHGBi4KzIbUFSiw&usqp=CAU"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ExampleCarousel;
