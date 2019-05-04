import React from 'react';
import CalculatorButton from './calculatorButton.js';

const CalculatorContainer = (props) => {
  return (
    < div >
      {console.log(props.clickFunc)}
      <CalculatorButton buttonText='0' clickFunc={props.clickFunc} />
      <CalculatorButton buttonText='1' clickFunc={props.clickFunc} />
      <CalculatorButton buttonText='2' clickFunc={props.clickFunc} />
      <CalculatorButton buttonText='3' clickFunc={props.clickFunc} />
      <CalculatorButton buttonText='4' clickFunc={props.clickFunc} />
      <CalculatorButton buttonText='5' clickFunc={props.clickFunc} />
      <CalculatorButton buttonText='6' clickFunc={props.clickFunc} />
      <CalculatorButton buttonText='7' clickFunc={props.clickFunc} />
      <CalculatorButton buttonText='8' clickFunc={props.clickFunc} />
      <CalculatorButton buttonText='9' clickFunc={props.clickFunc} />
    </div >
  )
}
export default CalculatorContainer;