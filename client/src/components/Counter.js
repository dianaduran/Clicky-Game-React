import React from "react";

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  // state = {
  //   score: 0,
  //   top-score:0
  // };

  // // handleIncrement increments this.state.score by 1
  // handleIncrement = () => {
  //   // We always use the setState method to update a component's state
  //   this.setState({ score: this.state.score + 1 });
  // };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      "Score: 0 | Top-Score: 0"
      // <div className="card text-center">
      //   <div className="card-header bg-primary text-white">
      //     <h3 className="card-title"> Click Counter!</h3>
      //   </div>
      //   <div className="card-body">
      //     <p className="card-text">Click Count: {this.state.score}</p>
      //     <button className="btn btn-primary" onClick={this.handleIncrement}>
      //       Increment
      //     </button>
      //   </div>
      // </div>
    );
  }
}

export default Counter;
