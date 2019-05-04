import React from 'react';
import CalculatorButton from './calculatorButton.js';
import EquationArea from './equationArea.js';
import PrevCalcsArea from './prevCalcsArea.js';

const CalculatorContainer = (props) => {
  return (
    < div >
      <EquationArea equationText={props.equationText} />
      <CalculatorButton buttonText='7' clickFunc={props.clickFunc} />
      <CalculatorButton buttonText='8' clickFunc={props.clickFunc} />
      <CalculatorButton buttonText='9' clickFunc={props.clickFunc} />
      <CalculatorButton buttonText='x' clickFunc={props.clickFunc} />
      <CalculatorButton buttonText='4' clickFunc={props.clickFunc} />
      <CalculatorButton buttonText='5' clickFunc={props.clickFunc} />
      <CalculatorButton buttonText='6' clickFunc={props.clickFunc} />
      <CalculatorButton buttonText='-' clickFunc={props.clickFunc} />
      <CalculatorButton buttonText='1' clickFunc={props.clickFunc} />
      <CalculatorButton buttonText='2' clickFunc={props.clickFunc} />
      <CalculatorButton buttonText='3' clickFunc={props.clickFunc} />
      <CalculatorButton buttonText='+' clickFunc={props.clickFunc} />
      <CalculatorButton buttonText='0' clickFunc={props.clickFunc} />
      {/* <CalculatorButton buttonText='.' clickFunc={props.clickFunc} /> */}
      <CalculatorButton buttonText='/' clickFunc={props.clickFunc} />
      {/* <CalculatorButton buttonText='C' clickFunc={props.clickFunc} /> */}
      <CalculatorButton buttonText='=' clickFunc={props.clickFunc} />
      <PrevCalcsArea recentArr={props.testData} />
    </div >
  )
}
export default CalculatorContainer;