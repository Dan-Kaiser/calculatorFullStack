import React from 'react';

const CalculatorButton = (props) => (
  <div className={props.classNamed} onClick={props.clickFunc}>
    {props.buttonText}
  </div >
)

export default CalculatorButton;