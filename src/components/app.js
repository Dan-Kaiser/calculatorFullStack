import React from 'react';
import Axios from 'axios';
import CalculatorContainer from './calculatorContainer';
import Calculate from './calculationLogic'
/*
TODO
Make a current-state area to see whats being typed;
Make a display area for results;
*/
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      equation: '',
      prevResults: []
    };
    this.onClickTest = this.onClickTest.bind(this);
    this.updateEquation = this.updateEquation.bind(this);
    this.runCalculation = this.runCalculation.bind(this);
  }

  componentWillMount() {
    console.log('componentWillMount')
    this.setState({
      prevResults: testData
    })
  }

  runCalculation() {
    console.log(Calculate(this.state.equation));
    this.setState({
      equation: ''
    });

  }

  updateEquation(event) {
    let text = event.target.textContent;
    let updatedEquation = this.state.equation + text;
    this.setState({
      equation: updatedEquation
    }, () => {
      // console.log(this.state.equation);
    })
  }

  onClickTest(event) {
    // Axios.post('insert', {
    //   payload: event.target.textContent
    // }).then(results => {
    //   console.log(results.data);
    // });
    console.log(event.target.textContent);
  }

  render() {
    return (
      <CalculatorContainer
        testData={this.state.prevResults}
        equationText={this.state.equation}
        clickFunc={this.updateEquation}
        runCalculation={this.runCalculation} />
    )
  }
}
export default App;