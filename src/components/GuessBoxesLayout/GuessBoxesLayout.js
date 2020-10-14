import React from 'react';
import LetterBox from '../LetterBox/LetterBox';
/** style */
import * as El from './GuessBoxesLayout.style'

const GuessBoxesLayout = ({displayedWord}) => {
  return (
    <El.GuessBoxesContainer>
      <El.GuessBoxesRow>
        {displayedWord.map((char, index) => <LetterBox key={index} char={char} />)}
      </El.GuessBoxesRow>
    </El.GuessBoxesContainer>
  )
}

export default GuessBoxesLayout