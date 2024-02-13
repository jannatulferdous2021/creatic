import React, { createContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product from "../Product/Product";
import "./Shop.css";
import UseProducts from "../../Hooks/useProducts/UseProducts";
import UseDisplayProducts from "../../Hooks/useDisplayProducts/UseDisplayProducts";

export const userContext = createContext();
const Shop = () => {
  const [products, setProducts] = UseProducts([]);
  const [displayProducts, setDisplayProducts] = UseDisplayProducts([]);

  // const handleAddToCart = (product) => {
  //   const newCart = [...cart, product];
  //   setCart(newCart);
  // };

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data);
      });
  }, []);

  // useEffect(() =>{
  //   if(products.length){
  //     const savedCart = getStoredCart()
  //     const storedCart = [];
  //     for(const id in savedCart){
  //       const addedProduct = products.find(product => product.id === id)
  //       if(addedProduct){
  //         const quantity = savedCart[id]
  //         addedProduct.quantity = quantity;
  //         storedCart.push(addedProduct)
  //       }
  //     }
  //     setCart(storedCart)
  //   }
  // },[products])

  const handleSearch = (event) => {
    const searchText = event.target.value;

    const matchedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setDisplayProducts(matchedProducts);
  };

  // const handleAddToCart = (product) =>{
  //   const exists = cart.find(pd => pd.id === product.id)
  //   let newCart =[]
  //   if(exists){
  //     const rest = cart.filter(pd => pd.id !== product.id)
  //     exists.quantity = exists.quantity + 1;
  //     newCart = [...rest, product]
  //   }else{
  //     product.quantity=1;
  //     newCart = [...cart, product]
  //   }
  //   setCart(newCart);
  //   addToDb(product.id)
  // }

  return (
    <div>
      <div className="searchfield">
        <div>
          <h1>Total Products : {products.length}</h1>
        </div>
        <div className="search-container">
          <input
            onChange={handleSearch}
            type="text"
            placeholder="Search Product"
          />
        </div>
      </div>

      <Container>
        <Row>
          <Col xl={10} md={12} sm={12}>
            <Container>
              <Row>
                {displayProducts.map((product) => (
                  <Col xl={4} md={6} sm={12}>
                    <Product key={product.id} product={product} />
                  </Col>
                ))}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
