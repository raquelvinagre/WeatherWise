// components/TransportRecommendation.jsx
import React from 'react';

const TransportRecommendation = ({ weather }) => {
  const { precipitation } = weather;

  const getTransportAdvice = () => {
    if (precipitation === 'High') {
      return "Consider taking the train or bus instead of driving.";
    } else if (precipitation === 'Moderate') {
      return "Weather is not ideal for driving. Consider public transport options.";
    } else if (precipitation === 'Low') {
      return "Great weather for a road trip. Enjoy the drive!";
    } else {
      return "Consider taking the train or bus instead of driving.";
    }
  };

  return (
    <div className="transport-box rounded-lg bg-blue-200/70 p-4 w-full mr-4">
      <h3 className="text-lg font-bold">Recommended Mode of Transport 🚅</h3>
      <p>{getTransportAdvice()}</p>
    </div>
  );
};

export default TransportRecommendation;
