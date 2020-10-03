import React, { useEffect } from 'react'
// import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

/** style */
import * as El from './App.style'

/** components */
import LetterButtonContainer from './components/LetterButtonContainer'
import GuessBoxesContainer from './components/GuessBoxesContainer'
import NewGameButton from './components/NewGameButton'

import data from './data/data.json'
/** actions  */
import { setWordToGuess } from './state/actions'
import { selectWordToGuess } from './helpers/utils'


const App = () => {
  const dispatch = useDispatch()
  const { isGameStarted } = useSelector(state => state.cthuluReducer)

  useEffect(() => {
    const wordToGuess = selectWordToGuess(data, window.innerWidth)
    dispatch( setWordToGuess(wordToGuess) )
  }, [])

  return (
    <El.AppContainer className='animated fadeIn'>
      <El.AppTitle>Cthuluman</El.AppTitle>
      <El.AppSubTitle>Can you guess its name before the end?</El.AppSubTitle>

      <El.AppBodyContainer>
        {isGameStarted
          ? (
            <>
              <El.AppBodyGuess className='animated fadeIn'>
                <GuessBoxesContainer />
              </El.AppBodyGuess>

              <El.AppBodyLetters className='animated fadeIn'>
                <LetterButtonContainer />
              </El.AppBodyLetters> 
            </>
          ) 
          : <NewGameButton />
        }
      </El.AppBodyContainer>

    </El.AppContainer>
  )
}

export default App
