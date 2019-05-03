import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.onClickTest = this.onClickTest.bind(this);
  }

  onClickTest(event) {
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