import React, {useState} from 'react';

export default function Home(props) {
 console.log(props)
   return(
       <>
         <button onClick={()=> props.decreaseValue()}>Minus</button>
         <h1>{props.data.Value}</h1>
         <button onClick={()=> props.increaseValue()}>Plus</button>
       </>
   )
}