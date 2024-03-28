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
  const easyColorsArray = ['#FF5733', '#FFFF00', '#00FF00']

  // Define colors for the difficult level
  const difficultColorsArray = [
    '#FF5733',
    '#FFFF00',
    '#00FF00',
    '#0000FF',
    '#FF69B4',
  ]

  const generateRandomSequence = (level) => {
    const colors = level === 'easy' ? easyColorsArray : difficultColorsArray
    const sequence = []
    for (let i = 0; i < sequence.length; i++) {
      const randomIndex = Math.floor(Math.random() * colors.length)
      sequence.push(colors[randomIndex])
    }
    return sequence
  }

  return <div>Colors</div>
}

export default Colors
