import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { showAnswer, showRealAnswer } from "./actions";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Why is there no iPhone version 9?</h1>

        <h2>Answer:{this.props.answer} </h2>
        <h2>Explain Answer:{this.props.realAnswer} </h2>

        <button
          className="button"
          onClick={() => this.props.dispatch(showAnswer())}
        >
          What is the Answer?
        </button>

        <br />

        <button
          className="button"
          onClick={() => this.props.dispatch(showRealAnswer())}
        >
          What is the real Answer?
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => ({
  ...state
});

export default connect(mapStateToProps)(App);
