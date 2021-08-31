import { useState } from "react";
import { questions } from "./api";
import { MyAccrodion } from "./MyAccrodion";

export const Accrodion = () => {
  const [data, setData] = useState(questions);

  return (
    <>
      <section className="main-div">
        <h1 className="heading">React Interview Questions</h1>
        {data.map((curElem) => {
          const { id } = curElem;
          return <MyAccrodion key={id} {...curElem} />;
        })}
      </section>
    </>
  );
};
