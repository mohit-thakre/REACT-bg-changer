import { useState } from "react";

const App4 = () => {
  const [bg, setbg] = useState("gray");

  return (
    <>
      <span className="text-center font-bold text-4xl p-5 flex align-center justify-center">
        BACKGROUND CHANGER
      </span>
      <div
        className="w-full h-screen flex items-center justify-center"
        style={{ background: bg }}
      >
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-full mr-4"
          onClick={() => setbg("red")}
        >
          Red
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-full mr-4"
          onClick={() => setbg("green")}
        >
          Green
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-full mr-4"
          onClick={() => setbg("blue")}
        >
          Blue
        </button>
      </div>
    </>
  );
};

export default App4;
