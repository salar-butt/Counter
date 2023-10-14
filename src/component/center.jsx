import React from "react";
import App from "../App";

export default class Center extends React.Component {
  state = {
    count: 0
  };

  inc = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    } else {
      alert('Your value cannot go down less than 0');
    }
  };

  reset = () => {
    this.setState({
      count: 0
    });
  };

  render() {
    return (
      <div className="center">
       <div className="one"> <h1 className="head">{this.state.count}</h1></div>
       <div className="two"><button className="button1" onClick={this.inc}>+</button>
        <button className="button1 button2" onClick={this.decrement}>-</button>
        <button className="button1 button3" onClick={this.reset}>Reset</button></div> 
      </div>
    );
  }
}
