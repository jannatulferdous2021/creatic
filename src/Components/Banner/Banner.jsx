import React from "react";
import "./Banner.css";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
const Banner = () => {
  return (
    <Container >
          <Carousel className="mt-4">
      <Carousel.Item className="carousel-item">
        <Carousel.Caption>
          <div className="ban-text ">
            <h1>Creatic</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, <br />
              adipisicing elit. Voluptate quae ipsam <br />
              aut corrupti ab cum?
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item1">
        <Carousel.Caption>
          <div className="ban-text ">
            <h1>Creatic</h1>
            <div className="btn ">
              <a href="">Buy Now </a>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item2">
        <Carousel.Caption>
        <div className="ban-text ">
            <h1>Creatic</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, <br />
              adipisicing elit. Voluptate quae ipsam <br />
              aut corrupti ab cum?
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  );
};

export default Banner;
