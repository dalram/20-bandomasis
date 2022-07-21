import { useContext } from "react";
import FrontContext from "./FrontContext";


function OrdersList() {
    const { a } = useContext(FrontContext);
    return (
        <div className="orders-box">
        <div className="list-header">
          <h2>List of Orders</h2>
        </div>
        <div className="card-body">
          <ul className="list-group">
           
          </ul>
        </div>
      </div>
    )
}

export default OrdersList;