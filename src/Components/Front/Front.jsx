import { useEffect, useState } from "react";
import FrontContext from "./FrontContext";
import axios from 'axios';
import List from "./List";
import { authConfig } from "../../Functions/auth";
function Front() {
    const [lastUpdate, setLastUpdate] = useState(Date.now());
    const [products, setProducts] = useState(null);


    useEffect(() => {
        axios.get("http://localhost:3003/front/products", authConfig()).then((res) => {
          setProducts(res.data);
        });
      }, [lastUpdate]);
    return (
        <FrontContext.Provider value={{
            products,
        }}>
        <div>
            <List></List>
        </div>
        </FrontContext.Provider>
    )
}

export default Front;