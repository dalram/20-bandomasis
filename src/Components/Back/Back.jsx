import { useEffect } from "react";
import { useState } from "react";
import BackContext from "./BackContext";
import Nav from "./Nav";
import Orders from "./Orders/Orders";
import ProductsCrud from "./Products/Crud";
import axios from 'axios';
import { authConfig } from "../../Functions/auth";

function Back({ show }) {
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [createData, setCreateData] = useState(null);
  const [products, setProducts] = useState(null);
  const [deleteProduct, setDeleteProduct] = useState(null);
  const [editProduct, setEditProduct] = useState(null);
  const [modalProduct, setModalProduct] = useState(null);
  // Orders
  const [orders, setOrders] = useState(null);
  const [handleOrder, setHandleOrder] = useState(null);

// Create
  useEffect(() => {
    if (createData === null) {
      return;
    }
    axios.post("http://localhost:3003/admin/products", createData, authConfig()).then((res) => {
      setLastUpdate(Date.now());
    });
  }, [createData]);
// Read products
useEffect(() => {
  axios.get("http://localhost:3003/admin/products", authConfig()).then((res) => {
    setProducts(res.data);
  });
}, [lastUpdate]);

// delete product
useEffect(() => {
  if (null === deleteProduct) {
    return;
  }
  axios.delete("http://localhost:3003/admin/products/" + deleteProduct.id, authConfig()).then((res) => {
    setLastUpdate(Date.now());
  })
}, [deleteProduct]);

// edit product

useEffect(() => {
  if (null === editProduct) {
    return;
  }
  axios.put("http://localhost:3003/admin/products/" + editProduct.id, editProduct, authConfig()).then((res) => {
    setLastUpdate(Date.now());
  });
}, [editProduct]);

// Read orders

useEffect(() => {
  axios.get("http://localhost:3003/admin/orders", authConfig()).then((res) => {
    setOrders(res.data);
  });
}, [lastUpdate]);

// Edit, confirm or cancel order

useEffect(() => {
  if (null === handleOrder) {
    return;
  }
  axios.put("http://localhost:3003/admin/orders/" + handleOrder.id, handleOrder, authConfig()).then((res) => {
    setLastUpdate(Date.now());
  });
}, [handleOrder]);

  return (
    <BackContext.Provider value={{
      setCreateData,
      products,
      setDeleteProduct,
      setEditProduct,
      setModalProduct,
      editProduct,
      modalProduct,
      orders,
      setHandleOrder
    }}>
      {show === "admin" ? (
        <>
          <Nav />
          <h1>Sveiki atvykę į administacinę sritį, naudokite navigacija!</h1>
        </>
      ) : show === "orders" ? (
        <>
          <Nav />
          <Orders />
        </>
      ) : (
        <>
          <Nav />
          <ProductsCrud />
        </>
      )}
    </BackContext.Provider>
  );
}

export default Back;
