import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
        className="button"
        onClick={() => props.removeFeature(props.feature)}
        >
          X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;


// === (line 9) was the only addition to this component ===
// it adds the onClick event for when a feature is removed and passes props