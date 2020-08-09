import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';

import cthulhu_img from './cthulhu_img.jpg';
import LetterButtonContainer from './components/LetterButtonContainer';
import GuessBoxesContainer from './components/GuessBoxesContainer';

import data from './data/data.json';
import {setWordToGuess} from './state/actions';
import {selectWordToGuess} from './helpers/utils';
import NewGameButton from './components/NewGameButton';

const getStyles = {
  app: {
    backgroundColor: '#222222',
    color: '#dfdfdf',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100%',
    margin: 0,
    padding: 0,
    textAlign: 'center',
  },
  body: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  guessBody: {
    alignSelf: 'flex-end',
    height: '100px',
  },
  image: {
    maxWidth: '75%',
  },
  imageBody: {
    marginBottom: '24px',
  },
  subTitle: {
    fontSize: '15px',
    margin: '0 0 24px',
  },
  title: {
    fontSize: '65px',
    margin: 0,
  },
  '@media (max-width: 500px)': {
    guessBody: {
      height: '50px',
    },
  }
};

export class App extends React.Component {
  componentDidMount() {
    const wordToGuess = selectWordToGuess(data, window.innerWidth);
    this.props.setWordToGuess(wordToGuess);
  }

  render() {
    const {app, body, guessBody, imageBody, image, letterChoicePanel, subTitle, title} = this.props.classes;
    
    return (
      <div className={app}>
        <h1 className={title}>Cthuluman</h1>
        <h2 className={subTitle}>Can you guess its name before the end?</h2>
        <div className={body}>
          <div className={imageBody}>
            {/* TODO: REPLACE WITH COVERED IMAGE CONTAINER */}
            <img className={image} alt="cthulu" src={cthulhu_img} />
          </div>
          {this.props.isGameStarted ? 
            <div>
              <div className={guessBody}>
                <GuessBoxesContainer />
              </div>
              <div className={letterChoicePanel}>
                <LetterButtonContainer />
              </div> 
            </div>
            : <NewGameButton />}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  isGameStarted: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  return {
    isGameStarted: state.cthuluReducer.gameStarted,
  }
};

const mapDispatchToProps = {setWordToGuess};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(getStyles)(App));
