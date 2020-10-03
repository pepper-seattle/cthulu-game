import styled from 'styled-components'

/** image */
import cthulhu_img from './assets/images/cthulhu_img.jpg'

export const AppContainer = styled.div`
  color: #dfdfdf;
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  background-image: url(${cthulhu_img});
  background-repeat: no-repeat;
  background-size: cover;
`

export const AppTitle = styled.h1`
  font-size: ${props => props.theme.typography.fontSize[65]};
  margin: 0;
`

export const AppSubTitle = styled.h2`
  font-size: ${props => props.theme.typography.fontSize[18]};
  margin: 0 0 24px;
`

export const AppBodyContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
`

export const AppBodyGuess = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 100px;

  @media( max-width: ${props => props.theme.screen.xs} ) {
    height: 50px;
  }

`

export const AppBodyLetters = styled.div`
  display: flex;
  max-width: 400px;
  text-align: center;
`