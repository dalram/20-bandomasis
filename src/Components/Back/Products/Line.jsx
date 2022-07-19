import { useContext } from "react";
import BackContext from "../BackContext";

const Line = ({ product }) => {
  const { setDeleteProduct, setModalProduct } = useContext(BackContext);
  const handleDelete = () => {
    setDeleteProduct(product);
  };

  const handleEdit = () => {
    setModalProduct(product);
  };

  return (
    <>
      <li className="margin-bot">
        <div className="item">
          <div className="item-info">
            <p>Color: {product.color}</p>
            <div style={{ backgroundColor: `${product.hex}` }} className='color-kv'></div>
            <p>Type: {product.type}</p>
            <p>Price: {product.price}</p>
            
          </div>
          <img src={product.photo} alt={product.type} className='line-img'/>
          <div className="item-buttons">
            <button className="btn" onClick={handleEdit}>
              Edit
            </button>
            <button className="btn red-button" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default Line;
