import React, { Component } from "react";
import "./main.css";
import dogs from "../../dogs.json";
import Img from "../Img";
// import Counter from "../Counter";

import { Container } from "../../components/Grid";


 function shuffleArray (array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

let clicked=[];

class Main extends Component {

  state={
     count:0,
  };

  clickImgID=id=>{  
   // console.log("id  clicked: "+id)  
    if(clicked.indexOf(id)<0){
      this.setState({ count: this.state.count + 1  })
      console.log("score main: "+ this.state.count)
      clicked.push(id);
    }
    else
    {
      console.log("estaba: "+clicked);
      this.setState({ count: 0 })
    }
}
 
 
  render() {
   let shuffledDogs = shuffleArray(dogs);
  
    return (  
   <Container>
      <div onClick={this.props.clickDiv}>
       {shuffledDogs.map((dog, key) => (
        <Img
            id={dog.id}
            key={dog.id}
            url={dog.url}
            clickImgID={this.clickImgID}
           />
        ))}
       
      </div>
   </Container> 
         
    );
 }
}
  
  export default Main;