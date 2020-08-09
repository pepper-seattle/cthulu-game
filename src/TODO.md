TODO:
- Show the updated guesses in defaultDisplay
  + The display value is updating, but it's not being registered by letterbuttons for some reason

- fix guessCount increase
  + increased value is adding correctly, but the action isn't being fired in redux

- build overlay for image
  + tie to number of guesses in state
    - the lower the number to reveal the image the harder the difficulty
      + to implement this you'd need to implement difficulties

- Disable letter buttons that have been clicked
  + appears to disable, but doesn't stick to each button

- end game
  + once defaultDisplay is devoid of *'s display a pop up message with the new game button

- Write a proper readme file

Notes
- the only actions firing currently are SET_WORD_TO_GUESS and START_GAME