import { useState } from "react";

const UseDisplayProducts = () => {
    const [displayProducts, setDisplayProducts] = useState([]);
    return [displayProducts,setDisplayProducts]
};

export default UseDisplayProducts;