import {
  GUESS_COUNT_INCREASE,
  SET_DISPLAY_VALUES,
  SET_WORD_TO_GUESS,
  START_GAME,
  } from './constants';

export const DEFAULT_STATE = {
  displayValues: [],
  gameStarted: false,
  guessCount: 0,
  wordToGuess: [],
};

export default function cthuluReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case GUESS_COUNT_INCREASE:
      return {
        ...state,
        guessCount: action.payload,
      }

    case SET_DISPLAY_VALUES:
      return {
        ...state,
        displayValues: action.payload,
      }

    case SET_WORD_TO_GUESS:
      return {
        ...state,
        displayValues: action.payload.initialDisplay,
        wordToGuess: action.payload.wordToGuess,
      };

    case START_GAME:
      return {
        ...state,
        gameStarted: true,
      };

    default:
      return state;
  }
}