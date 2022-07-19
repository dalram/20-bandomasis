import { useEffect } from "react";
import { useState } from "react";
import BackContext from "./BackContext";
import Nav from "./Nav";
import Orders from "./Orders/Orders";
import ProductsCrud from "./Products/Crud";
import axios from 'axios';

function Back({ show }) {
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [createData, setCreateData] = useState(null);
  const [products, setProducts] = useState(null);
  const [deleteProduct, setDeleteProduct] = useState(null);
  const [editProduct, setEditProduct] = useState(null);
  const [modalProduct, setModalProduct] = useState(null);


// Create
  useEffect(() => {
    if (createData === null) {
      return;
    }
    axios.post("http://localhost:3003/admin/products", createData).then((res) => {
      setLastUpdate(Date.now());
    });
  }, [createData]);
// Read products
useEffect(() => {
  axios.get("http://localhost:3003/admin/products").then((res) => {
    setProducts(res.data);
    console.log(products);
  });
}, [lastUpdate]);

// delete product
useEffect(() => {
  if (null === deleteProduct) {
    return;
  }
  axios.delete("http://localhost:3003/admin/products/" + deleteProduct.id).then((res) => {
    setLastUpdate(Date.now());
  })
}, [deleteProduct]);

// edit product

  return (
    <BackContext.Provider value={{
      setCreateData,
      products,
      setDeleteProduct,
      setEditProduct,
      setModalProduct,
      editProduct,
      modalProduct
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
