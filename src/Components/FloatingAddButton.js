import React from "react";

const FloatingAddButton = ({ onClick }) => {
  
  return (
    <div className="add-button">
      <button onClick={() => onClick()}>&#x271A;</button>
    </div>
  );
};
export default FloatingAddButton;