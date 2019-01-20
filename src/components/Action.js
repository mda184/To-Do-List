import React from 'react';
const now = require("date-now");

const Action = (props) => (
  <div>
    <button
      className="big-button"
      onClick={props.handlePick}
      disabled={!props.hasOptions}
    >
      Today 
      </button>
  </div>
);

export default Action;
