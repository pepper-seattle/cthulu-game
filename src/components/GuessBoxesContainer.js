import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import GuessBoxesLayout from './GuessBoxesLayout/GuessBoxesLayout';

const GuessBoxesContainer = ({displayValues}) => {
  return (
    <GuessBoxesLayout displayedWord={displayValues} />
  )
};

GuessBoxesContainer.propTypes = {
  displayValues: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  displayValues: state.cthuluReducer.displayValues,
});

export default connect(mapStateToProps)(GuessBoxesContainer);