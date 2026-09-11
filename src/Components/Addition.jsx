import React from "react";
import { useEffect } from "react";

function Addition() {
  function add() {
    let a = 23;
    let b = 77;
    console.log(parseInt(a) + parseInt(b));
  }
  useEffect(() => {
    add();
  }, []);

  return (
    <>
      <div className="text-center bg-primary text-white p-3 rounded my-4">
        <h2 className="fw-bold mb-0">Addition Page</h2>
      </div>
    </>
  );
}

export default Addition;
