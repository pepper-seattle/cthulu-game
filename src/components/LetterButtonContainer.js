import React from 'react';
import {connect} from 'react-redux';

import data from '../data/data.json'
import {increaseGuessCount, guessLetter, setDisplay} from '../state/actions';
import LetterButtons from './LetterButtons';


export const LetterButtonContainer = (props) => {
  const {displayValues, guessedLetters, wordToGuess} = props;
  const letterArray = data.alphabet;
  
  const clickHandler = (char) => {
    props.guessLetter(char);
    props.increaseGuessCount();

    // If a correct guess is made replace intial display values with the guessed character
    let matches = wordToGuess.map((w, i) => w === char ? i : '').filter(String);
    if(matches.length > 0) {
      let newDisplay = displayValues.slice();
      matches.forEach(e => newDisplay.splice(e, 1, char));
      props.setDisplay(newDisplay);
    }
  };
  
  return (
    <LetterButtons
      guessedLetters={guessedLetters}
      letterArray={letterArray}
      onClick={clickHandler}
    />
  );
};

const mapStateToProps = state => ({
  displayValues: state.cthuluReducer.displayValues,
  guessedLetters: state.cthuluReducer.guessedLetters,
  wordToGuess: state.cthuluReducer.wordToGuess,
});

const mapDispatchToProps = {
  guessLetter,
  increaseGuessCount,
  setDisplay,
};

export default connect(mapStateToProps, mapDispatchToProps)(LetterButtonContainer);