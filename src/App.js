// import React, { useState } from "react";
// import FriendCard from "./components/FriendCard";
// import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
// import friendsjson from "./friends.json";

// export default function App(){
//   const [friends, setFriends] = useState(friendsjson);

//   return (
//     <Wrapper>
//       <Title>Friends List</Title>
//       {friends.map(friend => (
//         <FriendCard
//           removeFriend={(id) => setFriends(friends.filter(friend => friend.id !== id))}
//           id={friend.id}
//           key={friend.id}
//           name={friend.name}
//           image={friend.image}
//           occupation={friend.occupation}
//           location={friend.location}
//         />
//       ))}
//     </Wrapper>
//   );
// }

// import React, { useState} from 'react';
// // import logo from './logo.svg';
// import cards from '../src/Cards.json';
// import Header from './components/Header/index';
// import Card from './components/Card/index';
// import Wrapper from './components/wrapper/index';
// import './App.css';

import React, { useState } from "react";
import Card from "./components/Card/index.js";
import Wrapper from "./components/Wrapper/index.js";
import Header from "./components/Header/index.js";
import cards from "./friends.json";
function App() {
 const [cardState, setCardState] = useState(cards);
 const [pointsState, setPointsState] = useState(0);
 const [topState, setTopState] = useState(0);
function clickCount(id) {
  // eslint-disable-next-line
 return cardState.find((v,i) => {
   if (v.id === id) {
     //if card clicked equals 0 then make it on clicked equal one so it is already a chosen id
     if (cards[i].clicked === 0) {
       cards[i].clicked = cards[i].clicked + 1;
       setPointsState(pointsState +1)
       setCardState(cardState.sort(() => Math.random() - 0.5))
     } else {
       if (pointsState > topState) {
         setTopState(pointsState)
       }
       cardState.forEach(card => {
         card.clicked = 0;
       });
       //eslint-disable-next-line
       alert("Better luck next time! \nscore: ${pointsState}");
       setPointsState(0)
       setCardState(cardState.sort(() => Math.random() - 0.5))
     }
     return true;
     }
   });
 }
return (
 <Wrapper>
   <Header score={pointsState} highscore={topState}>Clicky Game</Header>
   {cardState.map(card => (
     <Card
     clickCount={clickCount}
       id={card.id}
       key={card.id}
       image={card.image}
     />
   ))}
 </Wrapper>
 );
}
export default App;