import styled, { css } from 'styled-components'

/** image */
import cthulhu_img from './assets/images/cthulhu_img.jpg'
import skull_img from './assets/images/skull.png'

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
  background-size: contain;
  background-position: center;

  @media( max-width: ${props => props.theme.screen.xs} ) {
    background-position: top;
  }
`

export const AppTitle = styled.h1`
  font-size: ${props => props.theme.typography.fontSize[65]};
  margin: 0;

  @media( max-width: ${props => props.theme.screen.xs} ) {
    font-size: ${props => props.theme.typography.fontSize[45]};
  }
`

export const AppSubTitle = styled.h2`
  font-size: ${props => props.theme.typography.fontSize[18]};
  margin: 0 0 24px;

  @media( max-width: ${props => props.theme.screen.xs} ) {
    font-size: ${props => props.theme.typography.fontSize[16]};
  }
`

export const AppChancesRemaining = styled.h3`
  margin: 0;
  font-size: ${props => props.theme.typography.fontSize[34]};
  display: flex;
  flex-flow: row wrap;
  position: relative;

  > b {
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    color: ${props => props.theme.color.secondary};
    background-color: ${props => props.theme.color.primary};
    padding: 5px;
    border-radius: 50%;
    min-width: 40px;
    text-align: center;

    @media( max-width: ${props => props.theme.screen.xs} ) {
      padding-top: 0px;
    }
  }

  ::after {
    opacity: ${props => props.isActive ? 1 : 0};
    content: "-1";
    background: url("${skull_img}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height: 40px;
    width: 90px;
    position: absolute;
    transition-property: opacity, bottom, right;

    ${props => props.isActive && css`
      animation: skullInDown .8s;
    `}

    @media( max-width: ${props => props.theme.screen.xs} ) {
      height: 20px;
      width: 70px;
    }
  }

  @keyframes skullInDown {
    0% {
      bottom: -5px;
    }
    100% {
      bottom: -30px;
      opacity: 0;
    }
  }

  @media( max-width: ${props => props.theme.screen.xs} ) {
    margin-bottom: 20px;
    font-size: ${props => props.theme.typography.fontSize[24]};
  }
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