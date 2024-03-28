import React, { useState } from 'react'
import './colors.css'

//2. Generate Color Sequence
//3. Display colors
//4. Handle User Input
//5. Check for Correct Sequence
//6. Game Progression
//7. User Feedback
function Colors() {
  //STATE MANAGEMENT:

  //Establish the state of the current sequence of colors
  const [currentSequence, setCurrentSequence] = useState()
  //Establish the state of  the user input
  const [userInput, setUserInput] = useState(false)

  //GENERATE COLORS SEQUENCE:

  // Define colors for the easy level
  const easyColors = {
    red: '#FF5733',
    yellow: '#FFFF00',
    green: '#00FF00',
  }

  // Define colors for the difficult level
  const difficultColors = {
    red: '#FF5733',
    yellow: '#FFFF00',
    green: '#00FF00',
    blue: '#0000FF',
    pink: '#FF69B4',
  }

  return <div>Colors</div>
}

export default Colors
