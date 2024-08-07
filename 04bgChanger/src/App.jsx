import { useState } from "react";

function App() {
  const [color, setColor] = useState("orange");

  return (
    <>
      <div
        className="w-full h-screen duration-200 flex justify-center items-center relative"
        style={{ backgroundColor: color }}
      >
        <div className="absolute bottom-10 flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">
          <button onClick={() => setColor("red")}
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button onClick={() => setColor("blueviolet")}
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "BlueViolet" }}
          >
            BlueViolet
          </button>
          <button onClick={() => setColor("green")}
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button onClick={() => setColor("black")}
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button onClick={() => setColor("maroon")}
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Maroon" }}
          >
            Maroon
          </button>
          <button onClick={() => setColor("magenta")}
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Magenta" }}
          >
            Magenta
          </button>
          <button onClick={() => setColor("royalblue")}
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "RoyalBlue" }}
          >
            RoyalBlue
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
