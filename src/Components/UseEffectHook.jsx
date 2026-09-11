import React, { useEffect, useState } from "react";
import Addition from "./Addition";

function UseEffectHook() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("UseEffect Component");
  }, [count]);

  return (
    <>
      <div className="text-center bg-primary text-white p-3 rounded my-4">
        <h1>Use effect Hook</h1>
        <h2 className="text-center">Counter:{count}</h2>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Count++
        </button>
      </div>
    </>
  );
}

export default UseEffectHook;
