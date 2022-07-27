import { useContext } from "react";
import BackContext from "../BackContext";

const OrdersLine = ({ order }) => {
  const { setHandleOrder } = useContext(BackContext);
  console.log(order);
  const handleConfirm = () => {
    const data = {...order, approved: 1};
    setHandleOrder(data);
  }
  const handleCancel = () => {
    const data = {...order, approved: 0};
    setHandleOrder(data);
  }
  return (
    <>
      <li className="margin-bot">
        <div className="item">
          <div className="item-info">
            <p>Size: {order.size}</p>
            <p>Type: {order.type}</p>
            <p>Price: {order.price}</p>
            <p style={{color: order.approved ? 'green' : 'red'}}>Approved: {order.approved ? 'Yes' : 'No'}</p>
          </div>
          {order.photo === null ? null : (
            <img src={order.photo} alt={order.type} className="line-img" />
          )}
          <div className="item-buttons">
            <button className="btn" onClick={handleConfirm}>
              Confirm order
            </button>
            <button className="btn red-button" onClick={handleCancel}>
              Cancel order
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default OrdersLine;
