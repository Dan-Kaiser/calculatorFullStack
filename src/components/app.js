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
      <CalculatorContainer equationText={this.state.equation} clickFunc={this.onClickTest} />
    )
  }
}
export default App;