import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const buttonSize = '50px';
let isButtonDisabled = false;

const getStyles = {
  charButton: {
    backgroundColor: isButtonDisabled === 'selected' ? '#ff0000' : '#fff',
    border: '1px solid #000',
    borderRadius: '6px',
    color: '#222',
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: '900',
    outline: 'none',
    height: buttonSize,
    width: buttonSize,
    '&:hover, &:focus': {
      backgroundColor: '#b3b2b0',
    },
  },
  letterPanelBody: {
    margin: '12px',
  },
  '@media (max-width: 500px)': {
    charButton: {
      height: '35px',
      width: '35px',
    },
  },
};

const LetterButtons = ({classes, isDisabled, letterArray, onClick}) => {
  const {charButton, letterPanelBody} = classes;
  let letterButtons = [];
  
  letterArray.forEach(function(char, index) {
    letterButtons.push(<button className={charButton} disabled={isDisabled} key={index} onClick={() => onClick(char)} >{char}</button>)
  })

  return (
    <div className={letterPanelBody} >
      {letterButtons}
    </div>
  )
}

LetterButtons.propTypes = {
  handleClick: PropTypes.func,
}

export default injectSheet(getStyles)(LetterButtons);