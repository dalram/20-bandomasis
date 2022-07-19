import { useContext } from "react";
import BackContext from "../BackContext";
import Line from "./Line";

function List() {
    const { products } = useContext(BackContext);
    return (
        <div className="list-box">
        <div className="list-header">
          <h2>List of Products</h2>
        </div>
        <div className="card-body">
          <ul className="list-group">
            {
              products === null ? null : products.map(product => (
                    <Line
                      key={product.id}
                      product={product}
                    ></Line>
                  ))
              }
          </ul>
        </div>
      </div>
    )
}

export default List;