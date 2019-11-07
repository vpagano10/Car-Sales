import React from 'react';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
        className="button"
        onClick={() => props.buyItem(props.feature)}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;







// === (Line 9) was the only addition on this page ===
// adds an onClick event thats takes props and buyItem from App.js and it adds/buys the feature that is clicked