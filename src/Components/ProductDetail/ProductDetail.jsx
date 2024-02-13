import { Button, Col, Container, Row } from "react-bootstrap";



const ProductDetail = (props) => {
 const {singlepd} = props;
  const {handleAddToCart} = props;
  return (
    <div className="singlePdBody">
      <Container>
        <Row className="d-flex ">
          {/* <h3 className="m-4">This is Product Number: {productID}</h3> */}
          <Col className="singlePdImg" md={6}>
            <img src={singlepd?.img} alt="" />
          </Col>
          <Col md={6}>
            <div className="text">
              <h2>Product Name: {singlepd?.name}</h2>
              <h4> Price : {singlepd?.price}</h4>
              <Button className="btn" onClick={() => handleAddToCart(singlepd)}>
                Add To Cart
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
