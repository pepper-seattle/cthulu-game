import {GUESS_COUNT_INCREASE, SET_WORD_TO_GUESS, START_GAME, SET_DISPLAY_VALUES} from './constants';
import store from '../store';

export const increaseGuessCount = () => {
  return {type: GUESS_COUNT_INCREASE}
};

export const setWordToGuess = word => {
  let {wordToGuess} = store.getState().cthuluReducer;

  // Set the initial display of characters to be guessed to temp characters matching the
  // length of the word to be guessed
  let initialDisplay = [];
  wordToGuess = word.toUpperCase().split("");
  for(let x = 0; x < wordToGuess.length; x++) {
    initialDisplay.push('*');
  }

  return {
    type: SET_WORD_TO_GUESS,
    payload: {wordToGuess, initialDisplay}
  }
};

export const setDisplay = displayValues => {
  return {
    type: SET_DISPLAY_VALUES,
    payload: {displayValues},
  }
};

export const startNewGame = () => {
  return {type: START_GAME}
};
