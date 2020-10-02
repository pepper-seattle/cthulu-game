import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const buttonSize = 50;
const buttonSizeSmall = 35;

const getStyles = {
  charButton: {
    backgroundColor: '#fff',
    border: '1px solid #000',
    borderRadius: 6,
    color: '#222',
    cursor: 'pointer',
    fontSize: 18,
    fontWeight: 900,
    outline: 'none',
    height: buttonSize,
    width: buttonSize,
    '&:hover, &:focus': {
      backgroundColor: '#b3b2b0',
    },
  },
  charButtonHidden: {
    visibility: 'hidden',
    opacity: 0,
    transition: 'visibility 0s linear 300ms, opacity 300ms'
  },
  letterPanelBody: {
    padding: 12,
  },
  '@media (max-width: 500px)': {
    charButton: {
      height: buttonSizeSmall,
      width: buttonSizeSmall,
    },
  },
};

export const LetterButtons = ({classes, guessedLetters, letterArray, onClick}) => {
  const {charButton, letterPanelBody} = classes;
  
  const charButtonHidden = char => guessedLetters.includes(char) ? classes.charButtonHidden : '';

  return (
    <div className={letterPanelBody} >
      {letterArray.map((char) => (
        <button 
          className={`${charButton} ${charButtonHidden(char)}`}
          key={char}
          onClick={() => onClick(char)}
        >
          {char}
        </button>
      ))}
    </div>
  );
};

LetterButtons.propTypes = {
  classes: PropTypes.object,
  guessedLetters: PropTypes.arrayOf(PropTypes.string),
  letterArray: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
};

export default injectSheet(getStyles)(LetterButtons);