import React from 'react';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.onClickTest = this.onClickTest.bind(this);
  }

  onClickTest(event) {
    Axios.get('test').then(results => {
      console.log(results.data);
    })
    console.log(event.target.textContent);
  }

  render() {
    return (
      <div onClick={this.onClickTest}>
        React Hello World
      </div>
    )
  }
}
export default App;