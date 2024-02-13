import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import UseCart from "./../../Hooks/useCart/UseCart";
import Cart from "./../Cart/Cart";
import './ProductDetailDiv.css'
import ProductDetail from "../ProductDetail/ProductDetail";

const ProductDetailDiv = () => {
  const [cart, setCart] = UseCart({});
  let { productID } = useParams()
  const [detail, setDetail] = useState([]);
  const [singlepd, setSinglepd] = useState([]);

  useEffect(() => {
    fetch("/productDetail.json")
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, []);

  useEffect(() => {
    const pdDetail = detail.find(
      (detailpd) => detailpd.id.toString() === productID
    );
    setSinglepd(pdDetail);
  }, [detail]);

//    useEffect(() =>{
//       if(singlepd.length){
//         const savedCart = getStoredCart()
//         const storedCart = [];
//         for(const id in savedCart){
//           const addedProduct = singlepd.find(product => singlepd.id === id)
//           if(addedProduct){
//             const quantity = savedCart[id]
//             addedProduct.quantity = quantity;
//             storedCart.push(addedProduct)
//           }
//         }
//         setCart(storedCart)
//       }
//     },[singlepd])



//   const handleAddToCart = (singlepd) => {
//     const exists = cart.find((pd) => pd.id === singlepd.id);
//     let newCart = [];
//     if (exists) {
//       const rest = cart.filter((pd) => pd.id !== singlepd.id);
//       exists.quantity = exists.quantity + 1;
//       newCart = [...rest, singlepd];
//     } else {
//       singlepd.quantity = 1;
//       newCart = [...cart, singlepd];
//     }
//     setCart(newCart);
//     addToDb(singlepd.id);
//   };

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div>
      <Container className="productDetailDiv mt-5">
        <Row>
          <Col md={8}>
            <ProductDetail handleAddToCart={handleAddToCart} singlepd={singlepd}/>
          </Col>
          <Col md={4}>
            <h3>This is Cart Component</h3>
            <ul>
              {cart.map((ct) => (
                <li>
                  <Cart cartItem={ct} />
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetailDiv;
