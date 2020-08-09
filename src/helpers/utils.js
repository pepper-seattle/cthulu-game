const getRandomInt = (num) => {
  return Math.floor(Math.random() * Math.floor(num));
};

export const selectWordToGuess = (data, screenWidth) => {
  const wordList = screenWidth < 500 ? data.wordsToGuessShort : data.wordsToGuessLong;
  const listLength =  wordList.length;
  return wordList[getRandomInt(listLength)];
};