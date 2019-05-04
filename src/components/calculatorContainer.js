import React from 'react';
import CalculatorButton from './calculatorButton.js';
import EquationArea from './equationArea.js';
import PrevCalcsArea from './prevCalcsArea.js';

const testData = [
  '1 + 1 = 2',
  '2 + 2 = 4',
  '3 + 3 = 6',
  '4 + 4 = 8',
  '5 + 5 = 10',
  '6 + 6 = 12',
  '7 + 7 = 14',
  '8 + 8 = 16',
  '9 + 9 = 18',
  '0 + 0 = 0'
];

const CalculatorContainer = (props) => {
  return (
    < div >
      <EquationArea equationText={props.equationText} />
      <CalculatorButton buttonText='1' clickFunc={props.clickFunc} />
      <CalculatorButton buttonText='2' clickFunc={props.clickFunc} />
      <CalculatorButton buttonText='3' clickFunc={props.clickFunc} />
      <CalculatorButton buttonText='4' clickFunc={props.clickFunc} />
      <CalculatorButton buttonText='5' clickFunc={props.clickFunc} />
      <CalculatorButton buttonText='6' clickFunc={props.clickFunc} />
      <CalculatorButton buttonText='7' clickFunc={props.clickFunc} />
      <CalculatorButton buttonText='8' clickFunc={props.clickFunc} />
      <CalculatorButton buttonText='9' clickFunc={props.clickFunc} />
      <CalculatorButton buttonText='0' clickFunc={props.clickFunc} />
      <PrevCalcsArea recentArr={testData} />
    </div >
  )
}
export default CalculatorContainer;