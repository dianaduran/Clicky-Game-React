import React, { Component } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
//import Main from "./components/Main";
import Img from "./components/Img";
import dogs from "./dogs.json";
import { Container } from "./components/Grid";
import Footer from "./components/Footer";

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
let TopScore=0;

class App extends Component {

  state={
    count:0,
    topScore:0
  };

  

   clickImgID=id=>{  
      if(clicked.indexOf(id)<0){
         clicked.push(id);
         this.setState({ count: this.state.count + 1 });
        this.setState({ topScore: this.state.topScore + 1 });
     }
     else
     {
      clicked=[];
       console.log("estaba: "+clicked);
       this.setState({ count: 0 });
       TopScore+=1;
     }
 }
 
  render() {
    let shuffledDogs = shuffleArray(dogs);
    return (
    <div>
      <Nav count={this.state.count} topScore={TopScore}/>
      <Header />
      <Container>
        <div>
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
    <Footer />
    </div>

  );
 }
}

export default App;
