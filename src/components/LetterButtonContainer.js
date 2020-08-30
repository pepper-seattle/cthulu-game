import React from 'react';
import {connect} from 'react-redux';
import store from '../store';

import data from '../data/data.json'
import {increaseGuessCount, setDisplay} from '../state/actions';
import LetterButtons from './LetterButtons';


export const LetterButtonContainer = (props) => {
  const {displayValues, wordToGuess} = props;
  const letterArray = data.alphabet;
  
  const clickHandler = (char) => {
    store.dispatch(increaseGuessCount());

    // If a correct guess is made replace intial display values with the guessed character
    let matches = wordToGuess.map((w, i) => w === char ? i : '').filter(String);
    if(matches.length > 0) {
      let newDisplay = displayValues.slice();
      matches.forEach(e => newDisplay.splice(e, 1, char));
      store.dispatch(setDisplay(newDisplay));
    }
  };
  
 return <LetterButtons letterArray={letterArray} onClick={clickHandler} />
};

const mapStateToProps = state => ({
  displayValues: state.cthuluReducer.displayValues,
  wordToGuess: state.cthuluReducer.wordToGuess,
});

export default connect(mapStateToProps)(LetterButtonContainer);