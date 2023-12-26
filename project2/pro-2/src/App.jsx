import { useState } from "react";
import image1 from "./assets/1290701.jpg";
import image2 from "./assets/naruto-pictures-3n3frmm4xs2y0nvv.jpg";
const App = () => {
  const [img, setImg] = useState(image1);
  const [toggle, setToggle] = useState(false);

  const HandleClick = () => {
    if (toggle === true) {
      setToggle(false);
      setImg(image2);
    } else {
      setToggle(true);
      setImg(image1);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center  ",
        marginTop: "300px",
      }}
    >
      <img
        src={img}
        alt="fes"
        width={"250px"}
        height={"250px"}
        onClick={HandleClick}
      />
      {/* <button
        onClick={HandleClick}
        style={{ marginTop: "10px", backgroundColor: "grey" }}
      >
        Change Image
      </button> */}
    </div>
  );
};

export default App;
