import { useContext, useRef } from "react";
import { useState } from "react";
import BackContext from "../BackContext";
import getBase64 from "../../../Functions/getBase64";

function Create() {
  const { setCreateData } = useContext(BackContext);
  const [colorName, setColorName] = useState("");
  const [color, setColor] = useState("#000000");
  const [clothingType, setClothingType] = useState("");
  const [price, setPrice] = useState("");
  const [photoPrint, setPhotoPrint] = useState(null);
  const fileInput = useRef();
  const addClothing = () => {
    const obj = {
      colorName,
      color,
      clothingType,
      price: parseFloat(price),
      photo: photoPrint,
    };
    setCreateData(obj);
    setColorName("");
    setColor("#000000");
    setClothingType('');
    setPrice('');
    setPhotoPrint(null);
    fileInput.current.value = null;
  };

  const doPhoto = () => {
    getBase64(fileInput.current.files[0])
      .then((photo) => setPhotoPrint(photo))
      .catch((_) => {
        // tylim, kad erroro nebutu
      });
  };

  return (
    <>
    <div className="create-box">
      <div className="create-form">
        <h2>Create new clothing</h2>
        <div className="formGroup">
          <span>Name clothing color</span>
          <input
            className="color-name"
            type="text"
            value={colorName}
            onChange={(e) => setColorName(e.target.value)}
          />
          <div className="formGroup">
            <span>Select clothing color</span>
            <input
              type="color"
              value={color}
              onChange={(e) => {
                console.log(e.target.value);
                setColor(e.target.value);
              }}
            />
          </div>
          <div className="formGroup">
            <span>Clothing type</span>
            <input
              type="text"
              value={clothingType}
              min={0}
              onChange={(e) => setClothingType(e.target.value)}
            />
          </div>
          <div className="formGroup">
            <span>Clothing price</span>
            <input
              type="text"
              value={price}
              min={0}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          
          <div className="form-group photo-input">
          <label>Upload clothing photo</label>
            <input
              ref={fileInput}
              type="file"
              className="form-control"
              onChange={doPhoto}
            />
          </div>
          {photoPrint ? (
            <div className="photo-bin">
              <img src={photoPrint} alt="nice" />
            </div>
          ) : null}
          <div>
            <div className="create-button">
            <button className="btn addButton" onClick={addClothing}>
              Add clothing
            </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Create;
