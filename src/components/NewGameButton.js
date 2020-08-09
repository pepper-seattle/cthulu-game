import React from 'react';
import injectSheet from 'react-jss';
import {connect} from 'react-redux';
import {startNewGame} from '../state/actions';

const getStyles = {
  newGameButton: {
    backgroundColor: '#222',
    border: '2px solid #ff4655',
    color: '#ff4655',
    cursor: 'pointer',
    fontSize: '18px',
    outline: 'none',
    height: '50px',
    width: '240px',
    textTransform: 'uppercase',
    transitionDuration: '0.2s',
    '&:hover, &:focus': {
      color: '#222',
      backgroundColor: '#ff4655',
    },
  },
};

export const NewGameButton = props => {
  const {classes, startNewGame} = props;
  return <button className={classes.newGameButton} onClick={() => startNewGame()}>New Game</button>
};

const mapDispatchToProps = dispatch => ({
  startNewGame: () => dispatch(startNewGame()),
});

export default connect(null, mapDispatchToProps)(injectSheet(getStyles)(NewGameButton));