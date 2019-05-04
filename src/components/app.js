import React from 'react';
import Axios from 'axios';
import CalculatorContainer from './calculatorContainer';

/*
TODO
Make a current-state area to see whats being typed;
Make a display area for results;
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      equation: ''
    };
    this.onClickTest = this.onClickTest.bind(this);
    this.updateEquation = this.updateEquation.bind(this);
  }

  updateEquation(event) {
    let text = event.target.textContent;
    let updatedEquation = this.state.equation + text;
    this.setState({
      equation: updatedEquation
    }, () => {
      console.log(this.state.equation);
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
      <CalculatorContainer equationText={this.state.equation} clickFunc={this.updateEquation} />
    )
  }
}
export default App;