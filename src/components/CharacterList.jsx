import { useEffect, useState } from "react";
import Character from "../components/Character";
import React from 'react'

  function NavPage(props) {
    return (
    <header className="d-flex justify-content-between bg-emerald-900 align-items-center">
      <p>Page: {props.page}</p>
      <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        onClick = {() => props.setPage(props.page + 1)}>
        Page {props.page + 1}
      </button>
    </header>)
  }

  function CharacterList() {
    const [characters, setCharacters] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1)

    useEffect (() => {
      async function fetchData() {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        const data = await response.json();
        setLoading(false);
        setCharacters(data.results);
        }
    fetchData() 
}, [page]);

  return (
      <div className="container  bg-emerald-900">
     
        <NavPage page={page} setPage={setPage}/>

        {loading ? (
          <h1>Loading...</h1>
            ) : (  
            <div className="grid grid-cols-3" >
              {characters.map((character) => { 
                    return (
                        <div className="flex" key={character.id}>
                          <Character character={character} />
                        </div>
                    );
                  })}
            </div>
           )};<NavPage page={page} setPage={setPage}/>
            </div>

          )}
        

export default CharacterList;