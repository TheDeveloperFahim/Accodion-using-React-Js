import { useState } from "react";

export const MyAccrodion = ({ questions, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="main-heading">
        <p
          className="show"
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? "-" : "+"}
        </p>
        <h3>{questions}</h3>
      </div>
      {show && <p className="answer">{answer}</p>}
    </>
  );
};
