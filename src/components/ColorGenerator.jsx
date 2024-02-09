import { useEffect, useState } from "react";

function ColorGenerator() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColor(length) {
    return Math.floor(Math.random() * length);
  }

  function createHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColor(hex.length)];
    }

    setColor(hexColor);
  }

  function createRgbColor() {
    const r = randomColor(256);
    const g = randomColor(256);
    const b = randomColor(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") createRgbColor();
    else createHexColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        padding: "50px",
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create Hext Color</button>
      <button style={{ margin: "20px" }} onClick={() => setTypeOfColor("rgb")}>
        Create RGB Color
      </button>
      <button onClick={typeOfColor === "hex" ? createHexColor : createRgbColor}>
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          marginTop: "50px",
          gap: "20px",
        }}
      >
        <h2>{typeOfColor === "rgb" ? "RGB Color" : "Hex Color"}</h2>
        <h2>{color}</h2>
      </div>
    </div>
  );
}

export default ColorGenerator;
