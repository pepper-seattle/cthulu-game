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

const ImageCover = props => {
  const {classes, guessedLetters, wordToGuess} = props;

  const uniqueLetters = wordToGuess.reduce((uniques, letter) => {
    return uniques.includes(letter) ? uniques : [...uniques, letter];
  }, []);
  
  const hidden = letter => guessedLetters.includes(letter) ? classes.hidden : '';

  return (
    <div className={classes.root}>
      {uniqueLetters.map(letter => (
        <div className={hidden(letter)}></div>
      ))}      
    </div>
  );
}

ImageCover.propTypes = {
  classes: PropTypes.object,
  guessedLetters: PropTypes.arrayOf(PropTypes.string),
  wordToGuess: PropTypes.arrayOf(PropTypes.string),
};

export default injectSheet(styles)(ImageCover);