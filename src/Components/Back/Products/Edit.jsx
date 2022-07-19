import { useContext, useRef, useState } from "react";
import BackContext from "../BackContext";

const Edit = () => {
    const { setEditProduct, setModalProduct, modalProduct } = useContext(BackContext);
    const [color, setColor] = useState("");
    const [hex, setHex] = useState("");
    const [clothingType, setClothingType] = useState("");
    const [price, setPrice] = useState("");
    const [photoPrint, setPhotoPrint] = useState(null);
    const fileInput = useRef();


    const handleEdit = () => {
        const data = {
            color,
            hex,
            clothingType,
            price: parseFloat(price),
            photo: photoPrint,
        };
        // console.log(parseInt(price));
        // console.log(parseFloat(price));
        setEditProduct(data);
        setModalProduct(null);
    }
    if (null === modalProduct) {
        return null;
      }
    return ( <>
     <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button onClick={() => setModalProduct(null)}>X</button>
          </div>
          <div className="title">
            <h2>Product {modalProduct.color} editor</h2>
          </div>
          <div className="modalForm">
            <form>
              <div className="formGroup">
                <small>Scooter registration code</small>
                <input
                  type="text"
                  value={modalProduct.regCode}
                  onChange={(e) => modalProduct.color}
                />
              </div>
              <div className="formGroup">
                <small>Check if scooter is busy</small>
                <input
                  type="checkbox"
                  checked={modalProduct ? 1 : 0}
                  onChange={(e) => setClothingType(modalProduct ? 0 : 1)}
                />
              </div>
              {/* <div className="formGroup">
                <small>Scooter color</small>
                <select
                  className="create-color"
                  onChange={(e) => {
                    setColor(e.target.value);
                  }}
                  value={color}
                >
                  <option value="0" disabled>
                    Select Color
                  </option>
                  {colors
                    ? colors.map((color) => (
                        <option key={color.id} value={color.id}>
                          {color.title}
                        </option>
                      ))
                    : null}
                </select>
              </div> */}
              <div className="formGroup">
                <small>Last time used</small>
                <input
                  type="date"
                  value={modalProduct.color}
                  onChange={(e) => modalProduct.color}
                />
              </div>
              {/* <div className="formGroup">
                <small>Update last used time</small>
                <input
                  type="date"
                  value={lastUseTime}
                  onChange={(e) => setLastUseTime(e.target.value)}
                />
              </div> */}
              <div className="formGroup">
                <small>Total kilometres made</small>
                <input
                  type="number"
                  value={modalProduct.color}
                  onChange={(e) => modalProduct.color}
                />
              </div>
              {/* <div className="formGroup">
                <small>Traveled distance today</small>
                <input
                  type="number"
                  value={distance}
                  min={0}
                  onChange={(e) =>
                    setDistance(e.target.value < 0 ? 0 : e.target.value)
                  }
                />
              </div> */}

              {/* visus inputus reik padaryt kontroliuojamus! */}
            </form>
          </div>

          <div className="modalButtons">
            <button onClick={handleEdit}>Save changes</button>
            <button className="red-button" onClick={() => setModalProduct(null)}>
              Close
            </button>
          </div>
        </div>
      </div>
    
    </> );
}
 
export default Edit;