import React from "react";

const ResultDisplay = ({ cost }) => {
  return (
    <div style={{ margin: "20px 0", fontSize: "18px" }}>
      <strong>Estimated Petrol Cost: </strong>
      {cost !== null ? `₹${cost.toFixed(2)}` : "N/A"}
    </div>
  );
};

export default ResultDisplay;
