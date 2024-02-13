import { useState } from "react";

const UseCart = () => {
    const [cart, setCart] = useState([]);

    return [cart,setCart]
};

export default UseCart;