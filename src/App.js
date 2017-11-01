import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      answer: "",
      realAnswer: ""
    };
  }
  render() {
    return (
      <div className="App">
        <h1 className="App-title">What Happened to iPhone 9?</h1>

        <h2>Answer:{this.state.answer} </h2>
        <h2>Explain Answer:{this.state.realAnswer} </h2>

        <button onClick={() => this.setState({ answer: "Because 7 8 9" })}>
          What is the Answer?
        </button>

        <br />

        <button
          onClick={() => this.setState({ realAnswer: " Because 7 'ATE' 9 " })}
        >
          What is the real Answer?
        </button>
      </div>
    );
  }
}

export default App;
