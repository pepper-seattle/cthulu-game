import React from 'react'
/** style */
import * as El from './LetterBox.style'
// To ensure box and line are the same width
// TODO: Make this contigent on how many letters are in the word to guess

const LetterBox = ({char}) => {
  return (
    <El.LetterBoxContainer>
      <p>{char}</p>
      <hr />
    </El.LetterBoxContainer>
  )
}

export default LetterBox