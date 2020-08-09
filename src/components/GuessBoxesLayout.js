import React from 'react';
import injectSheet from 'react-jss';

import LetterBox from './LetterBox';

const getStyles = {
  boxPanelBody: {
    alignSelf: 'flex-end',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '12px',
  },
  boxRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
};

const GuessBoxesLayout = ({classes, displayedWord}) => {
  const {boxPanelBody, boxRow} = classes;
  return (
    <div className={boxPanelBody}>
      <div className={boxRow}>
        {displayedWord.map((char, index) => <LetterBox key={index} char={char} />)}
      </div>
    </div>
  )
}

export default injectSheet(getStyles)(GuessBoxesLayout);