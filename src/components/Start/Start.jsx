import React, { useState } from 'react'
import './start.css'
import Colors from '../Colors/Colors'

function Start() {
  //Establish the state of the game whether the game has started or not
  const [isGameStarted, setGameStarted] = useState(false)

  // Create the click event handler function
  const handleStartClick = () => {
    // Update the state indicating that the game has started
    setGameStarted(true)
  }
  return (
    <div className="start-btn-container">
      {isGameStarted ? (
        <Colors />
      ) : (
        <button onClick={handleStartClick} className="start-btn">
          Start
        </button>
      )}
    </div>
  )
}

export default Start
