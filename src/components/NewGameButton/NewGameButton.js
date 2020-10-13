import React from 'react';
import {startNewGame} from '../../state/actions';
import { useDispatch } from 'react-redux'
/** style */
import * as El from './NewGameButton.style'

export const NewGameButton = () => {
  const dispatch = useDispatch()
  return <El.NewGameButton onClick={() => dispatch( startNewGame() ) }>New Game</El.NewGameButton>
}
export default NewGameButton