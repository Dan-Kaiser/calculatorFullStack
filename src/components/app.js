import React from 'react';
import Axios from 'axios';
import CalculatorContainer from './calculatorContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
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
      <CalculatorContainer clickFunc={this.onClickTest} />
    )
  }
}
export default App;