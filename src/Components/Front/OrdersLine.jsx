const OrdersLine = ({ order }) => {
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
        </div>
      </li>
    </>
  );
};

export default OrdersLine;
