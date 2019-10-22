import React from "react";
const Card = props => (
 <div className="container">
   <div className="card" onClick={() => props.clickCount(props.id)}>
     <div className="img-container">
       <img alt={props.name} src={props.image} />
     </div>
   </div>
 </div>
);
export default Card;
