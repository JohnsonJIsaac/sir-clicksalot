import React from "react";
const Header = props => (
 <div id="root">
   <nav className="navbar">
     <ul>
       <li className="brand">
         <a href="/">Clicky Game</a>
       </li>
       <li className="answers">{props.answer}</li>
       <li> Score: {props.score}</li>
       <li> High Score: {props.highscore}</li>
     </ul>
   </nav>
   <header className="header">
     <h2>
       Click on an image to earn points, but don't click on any more than once!
     </h2>
   </header>
 </div>
);
export default Header;