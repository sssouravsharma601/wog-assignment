import React from "react";
import "./ReactFlexLayout.css";
import { numberToWords } from "../helper/helper";
import ReactFlexBox from "../widgets/reactFlexBox";

const ReactFlexLayout = ({ columns, numberOfBoxes }) => {
  const boxes = Array.from({ length: numberOfBoxes }, (_, index) => (
    <div key={index} className="box">
      {numberToWords(index + 1)}
    </div>
  ));

  return (
    <div className="flex-container" style={{ flexWrap: "wrap" }}>
      {boxes.map((box, index) => (
        <ReactFlexBox
          key={index}
          index={index}
          boxWidthPercentage={100 / columns}
          box={box}
        />
      ))}
    </div>
  );
};

export default ReactFlexLayout;
