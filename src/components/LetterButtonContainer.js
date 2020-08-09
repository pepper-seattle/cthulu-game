import React, {useState} from 'react';
import {connect} from 'react-redux';

import data from '../data/data.json'
import {increaseGuessCount, setDisplay} from '../state/actions';
import LetterButtons from './LetterButtons';


export const LetterButtonContainer = (props) => {
  const {displayValues, wordToGuess} = props;
  const letterArray = data.alphabet;
  const [isDisabled, setDisabled] = useState(false);
  
  const clickHandler = (char) => {
    setDisabled(true);
    increaseGuessCount();

    // If a correct guess is made replace intial display values with the guessed character
    let matches = wordToGuess.map((w, i) => w === char ? i : '').filter(String);
    if(matches.length > 0) {
      let newDisplay = displayValues;
      matches.forEach(e => newDisplay.splice(e, 1, char));
      setDisplay(newDisplay);
    }
  };
  
 return <LetterButtons disabled={isDisabled} letterArray={letterArray} onClick={clickHandler} />
};

const mapStateToProps = state => ({
  displayValues: state.cthuluReducer.displayValues,
  wordToGuess: state.cthuluReducer.wordToGuess,
});

const mapDispatchToProps = dispatch => ({
  increaseGuessCount: () => increaseGuessCount(), 
  setDisplay: displayValue => dispatch(setDisplay(displayValue))});

export default connect(mapStateToProps, mapDispatchToProps)(LetterButtonContainer);