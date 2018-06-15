import React from "react";
import "./img.css";

const Img = props => (

        <img className="card-img" alt={props.id} id={props.id} src={props.url} onClick={() => props.clickImg(props.id)} />
 );
  
  export default Img;