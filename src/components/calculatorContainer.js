import React from 'react';
import CalculatorButton from './calculatorButton.js';
import EquationArea from './equationArea.js';
import PrevCalcsArea from './prevCalcsArea.js';

const CalculatorContainer = (props) => {
  return (
    <div className='calculatorContainer'>
      <EquationArea equationText={props.equationText} />
      <CalculatorButton classNamed='clear' buttonText='C' clickFunc={() => {
        console.log('IMPLEMENT ME, JUST CLEAR THE STATE');
      }} />
      <CalculatorButton classNamed='numButton' buttonText='7' clickFunc={props.clickFunc} />
      <CalculatorButton classNamed='numButton' buttonText='8' clickFunc={props.clickFunc} />
      <CalculatorButton classNamed='numButton' buttonText='9' clickFunc={props.clickFunc} />
      <CalculatorButton classNamed='operator' buttonText='/' clickFunc={props.clickFunc} />
      <CalculatorButton classNamed='numButton' buttonText='4' clickFunc={props.clickFunc} />
      <CalculatorButton classNamed='numButton' buttonText='5' clickFunc={props.clickFunc} />
      <CalculatorButton classNamed='numButton' buttonText='6' clickFunc={props.clickFunc} />
      <CalculatorButton classNamed='operator' buttonText='x' clickFunc={props.clickFunc} />
      <CalculatorButton classNamed='numButton' buttonText='1' clickFunc={props.clickFunc} />
      <CalculatorButton classNamed='numButton' buttonText='2' clickFunc={props.clickFunc} />
      <CalculatorButton classNamed='numButton' buttonText='3' clickFunc={props.clickFunc} />
      <CalculatorButton classNamed='operator' buttonText='-' clickFunc={props.clickFunc} />
      <CalculatorButton classNamed='zero numButton' buttonText='0' clickFunc={props.clickFunc} />
      {/* <CalculatorButton classNamed='dot' buttonText='.' clickFunc={() => {
        console.log('either impliment me or make the zero button bigger');
      }} /> */}
      <CalculatorButton classNamed='equals' buttonText='=' clickFunc={props.runCalculation} />
      <CalculatorButton classNamed='operator' buttonText='+' clickFunc={props.clickFunc} />
      <PrevCalcsArea recentArr={props.data} />
    </div >
  )
}
export default CalculatorContainer;