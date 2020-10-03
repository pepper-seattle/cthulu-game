import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    display: 'flex',
    justifyContent: 'stretch',
    border: '1px solid #dfdfdf',
    '& > *': {
      width: '100%',
      backgroundColor: '#ff4655',
    },
  },
  hidden: {
    visibility: 'hidden',
    opacity: 0,
    transition: 'visibility 0s linear 300ms, opacity 300ms',
  }
};

const ALLOWED_GUESSES = [1, 2, 3, 4, 5];

const ImageCover = props => {
  const {classes, guessedLetters} = props;
  const guessCount = guessedLetters.length;
  
  const hidden = guessNumber => guessNumber <= guessCount ? classes.hidden : '';

  return (
    <div className={classes.root}>
      {ALLOWED_GUESSES.map(guessNumber => (
        <div className={hidden(guessNumber)}></div>
      ))}      
    </div>
  );
}

ImageCover.propTypes = {
  classes: PropTypes.object,
  guessedLetters: PropTypes.arrayOf(PropTypes.string),
};

export default injectSheet(styles)(ImageCover);