import React, { Component } from 'react';
import Button from './Component/Button.js';
import Yeetus from './Component/Yeetus.js';
import Counter from './Component/Counter.js';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.buttonWasClickedA = this.buttonWasClickedA.bind(this);
    this.buttonWasClickedB = this.buttonWasClickedB.bind(this);
    this.state = {
      count: 300
    };
  }

  buttonWasClickedA() {
    this.setState({
      count: this.state.count + 1
    });
  }
  buttonWasClickedB() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div className="App">
        <br></br>
        <h1><Counter count={this.state.count} /></h1>
        <br></br>
        <Button onClick={this.buttonWasClickedA} />
        <Yeetus onClick={this.buttonWasClickedB} />
      </div>
    );
  }
  render() {
    return (
      <div>
        <Counter count={this.state.count} />
        <Button onClick={this.buttonWasClickedA} />
        <Yeetus onClick={this.buttonWasClickedB} />
      </div>
    );
  }
}



export default App;