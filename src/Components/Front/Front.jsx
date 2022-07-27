import { useEffect, useState } from "react";
import FrontContext from "./FrontContext";
import axios from "axios";
import List from "./List";
import { authConfig } from "../../Functions/auth";
import OrdersList from "./OrdersList";
import OrderModal from "./OrderModal";
import Nav from "./Nav";
function Front() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [products, setProducts] = useState(null);
  const [orders, setOrders] = useState(null);
  const [modalProduct, setModalProduct] = useState(null);
  const [orderProduct, setOrderProduct] = useState(null);
  // Read products
  useEffect(() => {
    axios
      .get("http://localhost:3003/front/products", authConfig())
      .then((res) => {
        setProducts(res.data.map((element, i) => ({...element, show: true, row: i})));
      });
  }, [lastUpdate]);


  // Create order

  useEffect(() => {
    if (orderProduct === null) {
      return;
    }
    axios.post("http://localhost:3003/front/order", orderProduct, authConfig()).then((res) => {
      setLastUpdate(Date.now());
    });
  }, [orderProduct]);

  // Read orders

  useEffect(() => {
    axios.get("http://localhost:3003/front/orders", authConfig()).then((res) => {
      // console.log(res.data);
      setOrders(res.data);
    });
  }, [lastUpdate]);

  return (
    <FrontContext.Provider
      value={{
        products,
        setModalProduct,
        modalProduct,
        setOrderProduct,
        orders
      }}
    >
      <Nav/>
      <div className="container">
        <List></List>
        <OrdersList />
      </div>
      <OrderModal />
    </FrontContext.Provider>
  );
}

export default Front;
