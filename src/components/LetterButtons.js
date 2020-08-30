import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const buttonSize = '50px';

const getStyles = {
  charButton: {
    backgroundColor: '#fff',
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

export const LetterButtons = ({classes, letterArray, onClick}) => {
  const {charButton, letterPanelBody} = classes;

  return (
    <div className={letterPanelBody} >
      {letterArray.map((char, index) => [
          <button 
            className={charButton}
            key={index}
            onClick={() => {onClick(char, index)}}
          >{char}</button>
        ]
      )}
    </div>
  )
}

LetterButtons.propTypes = {
  handleClick: PropTypes.func,
}

export default injectSheet(getStyles)(LetterButtons);