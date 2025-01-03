import React, { useState } from "react";

const InputForm = ({ onFormSubmit }) => {
  const [mileage, setMileage] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit({ mileage, price });
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px 0" }}>
      <input
        type="number"
        placeholder="Mileage (km/l)"
        value={mileage}
        onChange={(e) => setMileage(e.target.value)}
        required
        style={{ marginRight: "10px", padding: "8px" }}
      />
      <input
        type="number"
        placeholder="Petrol Price (₹/l)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
        style={{ marginRight: "10px", padding: "8px" }}
      />
      <button type="submit" style={{ padding: "8px 15px" }}>
        Calculate
      </button>
    </form>
  );
};

export default InputForm;
