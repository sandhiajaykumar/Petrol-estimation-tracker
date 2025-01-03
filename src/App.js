import React, { useState } from "react";
import MapComponent from "./components/MapComponent";
import InputForm from "./components/InputForm";
import ResultDisplay from "./components/ResultDisplay";

const App = () => {
  const [points, setPoints] = useState([]);
  const [result, setResult] = useState(null);

  const handlePointsChange = (selectedPoints) => {
    setPoints(selectedPoints);
  };

  const calculateCost = (distance, mileage, price) => {
    return (distance / mileage) * price;
  };

  const handleFormSubmit = ({ mileage, price }) => {
    if (points.length === 2) {
      const distance = 100; // Placeholder for now. Replace with actual distance calculation.
      const cost = calculateCost(distance, mileage, price);
      setResult(cost);
    } else {
      alert("Please select both starting and destination points on the map.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Petrol Estimation Tracker</h1>
      <MapComponent onPointsChange={handlePointsChange} />
      <InputForm onFormSubmit={handleFormSubmit} />
      <ResultDisplay cost={result} />
    </div>
  );
};

export default App;
