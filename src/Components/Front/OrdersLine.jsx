const OrdersLine = ({ order }) => {
    console.log(order);
  return (
    <>
      <li className="margin-bot">
        <div className="item">
          <div className="item-info">
            <p>Size: {order.size}</p>
            <p>Type: {order.type}</p>
            <p>Price: {order.price}</p>
          </div>
          {order.photo === null ? null : (
            <img src={order.photo} alt={order.type} className="line-img" />
          )}
        </div>
      </li>
    </>
  );
};

export default OrdersLine;
