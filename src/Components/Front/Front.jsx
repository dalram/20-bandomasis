import { useEffect, useState } from "react";
import FrontContext from "./FrontContext";
import axios from "axios";
import List from "./List";
import { authConfig } from "../../Functions/auth";
import OrdersList from "./OrdersList";
import OrderModal from "./OrderModal";
function Front() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [products, setProducts] = useState(null);
  const [modalProduct, setModalProduct] = useState(null);
  const [orderProduct, setOrderProduct] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3003/front/products", authConfig())
      .then((res) => {
        setProducts(res.data);
      });
  }, [lastUpdate]);
  return (
    <FrontContext.Provider
      value={{
        products,
        setModalProduct,
        modalProduct,
        setOrderProduct,
      }}
    >
      <div className="container">
        <List></List>
        <OrdersList />
      </div>
      <OrderModal />
    </FrontContext.Provider>
  );
}

export default Front;
