import React, { Component } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends Component {

  state={
    count:0,
    topScore:0
  };

  clickDiv=()=>{
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
   this.setState({ topScore: this.state.topScore + 1 });
   };
 
  render() {
    return (
    <div>
      <Nav count={this.state.count} topScore={this.state.topScore}/>
      <Header />
      <Main clickDiv={this.clickDiv}/>
      <Footer />
    </div>

  );
 }
}

export default App;
