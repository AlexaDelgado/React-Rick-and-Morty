import  { useEffect, useState, Component} from "react";


function Character(props) 

 { 
  const [characters, setCharacters] = useState([]);

  return (
   <div className="text-center p-5 tracking-wide	text-amber-500 underline	" key={props.character.id}>
        <h2 className="font-sans	text-base text-center		" >{props.character.name}</h2>
        <img className="w-30 h-30 rounded-pill" src={props.character.image} alt={props.character.name}/>
      <p className="mt-2 ">{props.character.origin.name }</p>

      </div> 
  );
 }
export default Character