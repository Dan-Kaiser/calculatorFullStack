import React from 'react';

const CalculatorButton = (props) => (
  <div onClick={props.clickFunc}>
    {props.buttonText}
  </div >
)

export default CalculatorButton;