import { useContext, useEffect, useRef, useState } from "react";
import BackContext from "../BackContext";
import getBase64 from "../../../Functions/getBase64";

const Edit = () => {
  const { setEditProduct, setModalProduct, modalProduct } =
    useContext(BackContext);
  const [color, setColor] = useState("");
  const [hex, setHex] = useState("");
  const [clothingType, setClothingType] = useState("");
  const [price, setPrice] = useState("");
  const [photoPrint, setPhotoPrint] = useState(null);
  const fileInput = useRef();

  useEffect(() => {
    if (null === modalProduct) {
      return;
    }
    setColor(modalProduct.color);
    setHex(modalProduct.hex);
    setClothingType(modalProduct.type);
    setPrice(modalProduct.price);
    setPhotoPrint(modalProduct.photo);
    // fileInput.current = modalProduct.photo;
  }, [modalProduct]);

  const handleEdit = () => {
    const data = {
      id: modalProduct.id,
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
  };
  if (null === modalProduct) {
    return null;
  }

  const doPhoto = () => {
    getBase64(fileInput.current.files[0])
      .then((photo) => setPhotoPrint(photo))
      .catch((_) => {
        // tylim, kad erroro nebutu
      });
  };
  const handleDeletePhoto = () => {
    // fileInput.current = null;
    setPhotoPrint(null);
  }
  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button onClick={() => setModalProduct(null)}>X</button>
          </div>
          <div className="title">
            <h2>Product editor</h2>
          </div>
          <div className="modalForm">
            <form>
              <div className="formGroup">
                <span>Product color name</span>
                <input
                  type="text"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>
              <div className="formGroup">
                <span>Select clothing color</span>
                <input
                  type="color"
                  value={hex}
                  onChange={(e) => {
                    setHex(e.target.value);
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
                <label>Update clothing photo</label>
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
            </form>
          </div>

          <div className="modalButtons">
          <button
              className="red-button"
              onClick={handleDeletePhoto}
            >Delete photo</button>
            <button onClick={handleEdit}>Save changes</button>
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

export default Edit;
