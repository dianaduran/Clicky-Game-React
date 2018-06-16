import React, { Component } from "react";
import "./main.css";
import dogs from "../../dogs.json";
import Img from "../Img";
import Counter from "../Counter";

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
     topScore:0
  };

  clickImg=()=>{
    this.setState({ count: this.state.count + 1 });
    this.setState({ topScore: this.state.topScore + 1 });
   };

 clickImgID=id=>{    
    if(clicked.indexOf(id)<0){
         clicked.push(id);
    }
    else
    {
      console.log("estaba: "+clicked);
      this.resetState()
    }
}

resetState=()=>{  
  this.setState({ count: 0 })
  this.setState({ topScore: this.state.topScore})
  console.log("new count: "+this.state.count)
}

  
 
  render() {
   let shuffledDogs = shuffleArray(dogs);
  
    return (
   
   <Container>
     <div>
      <Counter cont={this.state.count} topScore={this.state.topScore} />
      </div>
     <div onClick={this.clickImg}>
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