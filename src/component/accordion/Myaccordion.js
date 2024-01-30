import React, { useState } from "react";

function Myaccordion({ question, answer }) {
  const [show, setShow] = useState(false);

  const click = () => {
    setShow(true);
  };

  return (
    <>
      <div className="main-heading">
        <p onClick={() => setShow(!show)}>{show ? "➖" : "➕"} </p>
        <p onClick={click}></p>
        <h3>{question}</h3>
      </div>
      {show && <p className="answers">{answer}</p>}
    </>
  );
}

export default Myaccordion;
