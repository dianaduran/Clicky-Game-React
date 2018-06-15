import React, { Component } from "react";
import "./main.css";
import dogs from "../../dogs.json";
import Img from "../Img";

import { Container } from "../../components/Grid";

class Main extends Component {

  state = {
    dogs
  };
  
  render() {
    return (
    <Container>
    {this.state.dogs.map(dog => (
        <Img
            id={dog.id}
            key={dog.id}
            url={dog.url}
           />
        ))}
    </Container>
  
  );
 }
}
  
  export default Main;