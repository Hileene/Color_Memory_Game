import React from 'react'
import Cards from '../Cards/Cards'
import './board.css'

function Board() {
  return (
    <div className="board">
      <div className="row">
        <Cards />
        <Cards />
        <Cards />
      </div>
      <div className="row">
        <Cards />
        <Cards />
        <Cards />
      </div>
      <div className="row">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  )
}

export default Board
