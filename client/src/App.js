import React, { Component } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends Component {

 
  render() {
    return (
    <div>
      <Nav />
     <Header />
      <Main />
      <Footer />
    </div>

  );
 }
}

export default App;
