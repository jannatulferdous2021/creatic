import { useEffect, useState } from "react";
import UseDisplayProducts from "../useDisplayProducts/UseDisplayProducts";


const UseProducts = () => {
    const [products, setProducts] = useState([]);
    const [displayProducts, setDisplayProducts] = UseDisplayProducts([]);

    useEffect(() => {
        fetch("/product.json")
          .then((res) => res.json())
          .then((data) => {
            setProducts(data);
            setDisplayProducts(data);
          });
      }, []);

    return [products,setProducts]
};

export default UseProducts;