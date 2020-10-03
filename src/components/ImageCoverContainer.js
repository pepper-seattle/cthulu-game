import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ImageCover from './ImageCover';

const ImageCoverContainer = props => <ImageCover {...props} />;

ImageCoverContainer.propTypes = {
  guessedLetters: PropTypes.arrayOf(PropTypes.string),
};

const mapStateToProps = state => ({
  guessedLetters: state.cthuluReducer.guessedLetters,
});

export default connect(mapStateToProps)(ImageCoverContainer);