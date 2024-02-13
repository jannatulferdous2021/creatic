import React from "react";
import busket from "../../assets/images/busket.jpg";
import offer from "../../assets/images/offfer.webp";
import lamp from "../../assets/images/lamp.jpg";
import decor from "../../assets/images/wall_decor.webp";
import "./ProductSection.css";

import { Card, Col, Container, Row } from "react-bootstrap";

const ProductSection = () => {
  const item = [
    {
      img: busket,
      name: "Busket",
    },
    {
      img: offer,
      name: "Hot Offer",
    },
    {
      img: lamp,
      name: "Lamp",
    },
    {
      img: decor,
      name: "Wall Decor",
    },
  ];
  return (
    <div>
      <Container className="pb-5">
        <Row>
          {item.map((item) => (
            <Col xl={3} md={6} sm={12} className="catagory">
              <Card className="catagory_card">
                <Card.Img variant="top" src={item.img} />
                <Card.Body className="text-center">
                  <Card.Title>{item.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductSection;
