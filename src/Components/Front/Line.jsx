import { useContext } from "react";
import FrontContext from "./FrontContext";

const Line = ({ product }) => {
  const { setModalProduct } = useContext(FrontContext);

  const handleOrder = () => {
    setModalProduct(product);
    console.log(product);
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
          {
            product.photo === null ? null : <img src={product.photo} alt={product.type} className='line-img'/>
          }
          <div className="item-buttons">
            <button className="btn" onClick={handleOrder}>
              Order this product
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default Line;
