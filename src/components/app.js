import React from 'react';
import Axios from 'axios';
import CalculatorContainer from './calculatorContainer';
import Calculate from './calculationLogic'
/*
implement dot or make 0 bigger button -- TODO
deal with trailing 0s -- TODO
deal with starting operators -- TODO

my idea is to keep a current number on state, 
  To keep track of current number, just keep adding the digits to it until you hit an operator
    if you hit an operator, reset it to an empty string.
  then use that to check for adding . or 0 to a number.
  if the number already contains a dot, don't add one
  if there's nothing in the number yet, don't add zeros
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      equation: '',
      prevResults: [],
      operator: false,
      currentNumber: ''
    };
    this.insertToDB = this.insertToDB.bind(this);
    this.queryRecentResults = this.queryRecentResults.bind(this);
    this.updateEquation = this.updateEquation.bind(this);
    this.runCalculation = this.runCalculation.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  componentWillMount() {
    this.queryRecentResults();
    window.setInterval(this.queryRecentResults, 1000);
  }

  clearState() {
    this.setState({
      equation: '',
      operator: false,
      currentNumber: ''
    })
  }

  queryRecentResults() {
    Axios.get('recent').then(results => {
      // console.log('results', results);
      const updatedResults = results.data.map(item => {
        return item.resultString;
      })
      this.setState({
        prevResults: updatedResults
      })
    })
  }

  runCalculation() {
    let calcString = this.state.equation;
    let result = Calculate(calcString);
    if (result) {
      this.setState({
        equation: ''
      });
    }
    return result;
  }

  updateEquation(event) {
    let text = event.target.textContent;
    let currOperator = this.state.operator;
    let updatedEquation = this.state.equation;
    if (text === 'x' || text === '/' || text === '+' || text === '-') {
      if (currOperator === false) {
        updatedEquation += text;
        currOperator = true;
      } else {
        let newOperator = updatedEquation.slice(0, -1) + text;
        updatedEquation = newOperator;
      }
    } else {
      updatedEquation += text;
      currOperator = false;
    }
    this.setState({
      equation: updatedEquation,
      operator: currOperator
    });
  }

  insertToDB(event) {
    let calculation = this.runCalculation();
    if (calculation) {
      Axios.post('insert', {
        payload: calculation
      }).then(results => {
        this.queryRecentResults();
      });
    }
  }

  render() {
    return (
      <CalculatorContainer
        clearFunc={this.clearState}
        data={this.state.prevResults}
        equationText={this.state.equation}
        clickFunc={this.updateEquation}
        runCalculation={this.insertToDB} />
    )
  }
}
export default App;