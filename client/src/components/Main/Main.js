import React, { Component } from "react";
import "./main.css";
import dogs from "../../dogs.json";
import Img from "../Img";

import { Container } from "../../components/Grid";


 function shuffleArray (array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  console.log(array);
 return array;
};

class Main extends Component {

  state = {
    dogs
  };

  // shuffledDogs=()=>{

  //   return shuffleArray(dogs);
   
  // };
 
  render() {
    let shuffledDogs = shuffleArray(this.state.dogs);
  
    return (
   <Container>
      {shuffledDogs.map((dog, key) => (
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