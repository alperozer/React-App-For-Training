import React from "react";
import { JsonData } from "./JsonData.js";

function JsonParse  ()  {
  return (
    <>
      <div className="stock-container">
        {JsonData.map((data, key) => {
          return (
            <div key={key}>
              {data.company +
                " , " +
                data.ticker +
                " ," +
                data.stockPrice +
                ", " +
                data.timeElapsed}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default JsonParse;