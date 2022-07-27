import { useContext, useEffect, useRef, useState } from "react";
import FrontContext from "./FrontContext";
import getBase64 from "../../Functions/getBase64";

const OrderModal = () => {
  const { setOrderProduct, setModalProduct, modalProduct } =
    useContext(FrontContext);
  const [size, setSize] = useState('3');
  const [comment, setComment] = useState("");
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];


  const handleOrder = () => {
    const data = {
      size: sizes[size - 1],
      comment: !!comment ? comment : null,
      product_id: modalProduct.id,
    };
    // console.log(parseInt(price));
    // console.log(parseFloat(price));
    setOrderProduct(data);
    setModalProduct(null);
    console.log(data);
    setComment('');
    setSize('3');
  };
  if (null === modalProduct) {
    return null;
  }

  
  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button onClick={() => setModalProduct(null)}>X</button>
          </div>
          <div className="modalForm" style={{flexDirection: "column", justifyContent: 'center', alignItems: 'center'}}>
            <h2>Order product <i style={{color: modalProduct.hex}}>{modalProduct.type}</i></h2>
          </div>
          <div className="modalForm">
            <form>
              <div className="formGroup">
                <span>Select clothing size</span>
                <select
                  type="text"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                >
                  <option value="0" disabled>Select size</option>
                  {
                    sizes.map((size, i) => <option key={i + 1} value={i + 1}>{size}</option>)
                  }

                </select>
              </div>
              <div className="formGroup">
                <span>Add your comment</span>
                <textarea value={comment} onChange={e => setComment(e.target.value)}></textarea>
              </div> 
            </form>
          </div>

          <div className="modalButtons" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <button onClick={handleOrder} style={{height: 'auto'}}>Complete Order</button>
            <button
              className="red-button"
              onClick={() => setModalProduct(null)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderModal;
