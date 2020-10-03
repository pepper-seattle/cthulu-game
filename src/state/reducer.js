import {
  GUESS_COUNT_INCREASE,
  GUESS_LETTER,
  SET_DISPLAY_VALUES,
  SET_WORD_TO_GUESS,
  START_GAME,
  } from './constants';

export const DEFAULT_STATE = {
  displayValues: [],
  isGameStarted: false,
  guessCount: 0,
  guessedLetters: [],
  wordToGuess: [],
};

export default function cthuluReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case GUESS_COUNT_INCREASE:
      return {
        ...state,
        guessCount: state.guessCount + 1,
      };

    case GUESS_LETTER:
      return {
        ...state,
        guessedLetters: [...state.guessedLetters, action.payload.letter],
      };

    case SET_DISPLAY_VALUES:
      return {
        ...state,
        displayValues: action.payload.displayValues,
      };

    case SET_WORD_TO_GUESS:
      return {
        ...state,
        displayValues: action.payload.initialDisplay,
        guessedLetters: [],
        wordToGuess: action.payload.wordToGuess,
      };

    case START_GAME:
      return {
        ...state,
        isGameStarted: true,
      };

    default:
      return state;
  }
}