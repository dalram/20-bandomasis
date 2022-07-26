import { useContext } from "react";
import FrontContext from "./FrontContext";
import OrdersLine from "./OrdersLine";


function OrdersList() {
    const { orders } = useContext(FrontContext);
    return (
        <div className="orders-box">
        <div className="list-header">
          <h2>List of Orders</h2>
        </div>
        <div className="card-body">
          <ul className="list-group">
           {
            orders ? orders.map(order => <OrdersLine order={order} key={order.id}></OrdersLine>) : null
           }
          </ul>
        </div>
      </div>
    )
}

export default OrdersList;