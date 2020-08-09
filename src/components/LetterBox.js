import React from 'react';
import injectSheet from 'react-jss';

// To ensure box and line are the same width
// TODO: Make this contigent on how many letters are in the word to guess
const boxWidth = '50px';

const getStyles = {
  letterBox: {
    font: '42px Arial Black',
    height: boxWidth,
    width: boxWidth,
  },
  letter: {
    color: 'red',
    margin: '0 0 5px',
  },
  guessLine: {
    borderBottom: '2px solid #fff',
    margin: 0,
  },
  '@media (max-width: 500px)': {
    letterBox: {
      font: '20px Arial',
      width: '25px',
    },
    letter: {
      margin: 0,
    },
  },
};

const LetterBox = ({classes, char, key}) => {
  const {letter, letterBox, guessLine} = classes;
  return (
    <div key={key} className={letterBox}>
      <p className={letter}>{char}</p>
      <hr className={guessLine} />
    </div>
  )
};

export default injectSheet(getStyles)(LetterBox);