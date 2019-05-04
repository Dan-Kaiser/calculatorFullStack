import React from 'react';

const CalculatorButton = (props) => (
  <div className="calcButton" onClick={props.clickFunc}>
    {props.buttonText}
  </div >
)

export default CalculatorButton;