import "./App.css";
import React from "react";

class App extends React.Component {
  state = {
    number: 0,
  };

  constructor() {
    super();

    //this.increment = this.increment.bind(this);
    //this.decrement = this.decrement.bind(this);
  }

  increment = () => {
    // console.log("this.state.number");
    // console.log("Increment function is called");

    //const oldNumber = this.state.number;
    //const newNumber = oldNumber + 1;

    //const obj = { number: newNumber };

    //this.setState(obj);
    this.setState({ number: this.state.number + 1 });
  };

  decrement = () => {
    //console.log("this.state.number");
    //console.log("Decrement function is called");
    //const oldNumber = this.state.number;
    //const newNumber = oldNumber - 1;

    //const newState = { number: newNumber };

    //this.setState(newState);
    if (this.state.number === 0) return;
    this.setState({ number: this.state.number - 1 });
  };

  getDisableness = () => {
    if (this.state.number === 0) return true;
    return false;
  };

  render() {
    return (
      <>
        <button className="btn btn-primary mt-6 my-1 mx-2"> ADD </button>

        <div className="d-flex my-5" style={{ size: "10px" }}>
          <button
            onClick={this.decrement}
            type="button"
            className="btn btn-danger mx-2"
            //disabled={this.getDisableness()}
            //disabled={this.state.number === 0 ? true : false}
            disabled={this.state.number === 0}
          >
            -
          </button>
          <p className="my-1">{this.state.number}</p>
          <button
            onClick={this.increment}
            type="button"
            className="btn btn-primary mx-2"
          >
            +
          </button>
        </div>
      </>
    );
  }
}

export default App;
