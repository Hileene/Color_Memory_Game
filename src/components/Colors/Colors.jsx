import React, { useState, useEffect } from 'react'
import './colors.css'

function Colors({ level }) {
  // Establish the state for current sequence, user input, and current sequence index
  const [currentSequence, setCurrentSequence] = useState([])
  const [userInput, setUserInput] = useState(false)
  const [currentSequenceIndex, setCurrentSequenceIndex] = useState(0)

  // Define colors for easy and difficult levels
  const easyColorsArray = ['#FF5733', '#FFFF00', '#00FF00']
  const difficultColorsArray = [
    '#FF5733',
    '#FFFF00',
    '#00FF00',
    '#0000FF',
    '#FF69B4',
  ]

  // Function to generate a random sequence based on the level
  const generateRandomSequence = (level) => {
    const colors = level === 'easy' ? easyColorsArray : difficultColorsArray
    const sequence = []
    for (let i = 0; i < 4; i++) {
      // fixed the loop
      const randomIndex = Math.floor(Math.random() * colors.length)
      sequence.push(colors[randomIndex])
    }
    return sequence
  }

  // Function to handle user input when clicking a color
  const handleColorClick = (clickedColor) => {
    // Check if user input is allowed
    if (!userInput) {
      return
    }

    // Compare the clicked color with the expected color in the sequence
    const expectedColor = currentSequence[currentSequenceIndex]
    if (clickedColor === expectedColor) {
      // If the clicked color matches the expected color
      // Update game state, advance to the next color, etc.
      if (currentSequenceIndex === currentSequence.length - 1) {
        // If the user clicked the last color in the sequence
        // Advance to the next level or end the game
        handleGameProgression() // Call the function to handle game progression
      } else {
        // Otherwise, move to the next color in the sequence
        setCurrentSequenceIndex(currentSequenceIndex + 1)
      }
    } else {
      // If the clicked color does not match the expected color
      // Handle incorrect input (e.g., end the game, show an error message)
      handleIncorrectInput() // Call the function to handle incorrect input
    }
  }

  // Function to handle game progression (to be implemented)
  const handleGameProgression = () => {
    // Update game state, advance to the next level, etc.
    // Example: setCurrentLevel(currentLevel + 1);
  }

  // Function to handle incorrect input (to be implemented)
  const handleIncorrectInput = () => {
    // Handle incorrect user input (e.g., end the game, show an error message)
    // Example: setGameOver(true);
  }

  // Initialize the current sequence when the component mounts
  useEffect(() => {
    setCurrentSequence(generateRandomSequence(level))
    setUserInput(true) // Allow user input after generating the sequence
  }, [])

  // Display colors and handle user input
  return (
    <div>
      {currentSequence.map((color, index) => (
        <div
          key={index}
          className="color-box"
          style={{ backgroundColor: color }}
          onClick={() => handleColorClick(color)}
        ></div>
      ))}
    </div>
  )
}

export default Colors
