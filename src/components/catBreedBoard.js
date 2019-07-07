import React from 'react';
import BreedFacts from './catBreedFacts';
import './catBreedBoard.css';



export default function Board() {
  return(
    <>
      <h2 className="title">My Favorite Cat Breeds</h2>
      <BreedFacts/>
    </>
  )
}