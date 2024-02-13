import React from "react";
import "./Product.css";
import { Card } from "react-bootstrap";
import { Link  } from "react-router-dom";

const Product = (props) => {
  const { name, price, img, id } = props.product;
  // const navigate = useNavigate();
  // const handleCLick = () => {
  //   navigate(`/shop/${id}`);
  // };
  return (
    <div>
      <Card className="mb-4">
        <Link to={`/shop/${id}`}>
          <Card.Img variant="top" src={img} />
        </Link>
        <Card.Body>
          <div className="card-text">
            <Link to={`/shop/${id}`}>
              <h5>{name}</h5>
              <p>Price:{price} </p>
              <button className="btn">Details</button>
            </Link>
            <button
              className="btn ms-2"
              onClick={() => props.handleAddToCart(props.product)}
            >
              Add To Cart
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
