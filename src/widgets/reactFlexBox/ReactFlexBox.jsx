import React, { useEffect } from "react";
import { numberToWords } from "../../helper/helper";

const ReactFlexBox = ({ boxWidthPercentage, index, box }) => {
  useEffect(() => {
    console.log(`${numberToWords(index + 1)} WAS CALLED`);
  }, [index]);
  return (
    <div
      key={index}
      style={{ flexBasis: `calc(${boxWidthPercentage}% - 10px)` }}
    >
      {box}
    </div>
  );
};

export default ReactFlexBox;
