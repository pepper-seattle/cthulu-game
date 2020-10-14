import React, { useState, useEffect, memo } from 'react'
// import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

/** style */
import * as El from './App.style'

/** components */
import LetterButtonContainer from './components/LetterButtonContainer'
import GuessBoxesContainer from './components/GuessBoxesContainer'
import NewGameButton from './components/NewGameButton/NewGameButton'

import data from './data/data.json'
/** actions  */
import { setWordToGuess, resetGame } from './state/actions'
import { selectWordToGuess } from './helpers/utils'


const App = () => {
  const dispatch = useDispatch()
  const { isGameStarted, displayValues, wordToGuess, guessCount } = useSelector(state => state.cthuluReducer)

  const [chances, setChances] = useState(0)

  useEffect(() => {
    startGame()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    console.log('< COUNT > ', guessCount)

    /** decrease chances */
    if (guessCount > 0) setChances(chances - 1)
    /** call end game method */
    if (isGameStarted && chances === 1) gameOverAction()
    /** check arrays */
    if (isGameStarted) compareArrays(displayValues, wordToGuess)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayValues, wordToGuess, guessCount])

  const compareArrays = (arrayToComplete, arrayAnswer) => {
    const array1 = arrayToComplete.toString()
    const array2 = arrayAnswer.toString()
    console.log('< VALUES > ', array1, array2, array1===array2, arrayAnswer)

    return array1 === array2 ? gameWinAction() : false
  }


  const startGame = () => {
    const wordToGuess = selectWordToGuess(data, window.innerWidth)
    dispatch( setWordToGuess(wordToGuess) )
    /** create chances */
    setChances((Number(wordToGuess.length) * 2 < 26 )? wordToGuess.length * 2  : 25)
  }

  const gameOverAction = () => {
    alert('YOU LOSE, try again!')
    dispatch( resetGame() )
    startGame()
  }

  const gameWinAction = () => {
    alert('< YOU WOON, GET MY PERK!! >')

    const wordToSearch = displayValues.reduce((acc, cur) => acc + cur, '')

    window.open(`https://www.google.com/search?q=${wordToSearch} cthulhu`)
    dispatch( resetGame() )
    startGame()
  }

  return (
    <El.AppContainer className='animated fadeIn'>
      <El.AppTitle>Cthuluman</El.AppTitle>
      <El.AppSubTitle>Can you guess its name before the end?</El.AppSubTitle>
      {isGameStarted && (
        <El.AppChancesRemaining className='animated fadeIn'>Chances remaining: <b>{chances}</b></El.AppChancesRemaining>
      )}

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

export default memo(App)
