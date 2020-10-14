import styled from 'styled-components'

export const LetterBoxContainer = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  font: 42px Arial Black;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
  
  > p {
    color: red;
    margin: 0 0 5px;
  }

  > hr {
    border-bottom: 2px solid #fff;
    margin: 0;
    width: 100%;
  }

  @media( max-width: ${props => props.theme.screen.xs} ) {
    width: 25px;
    font: 20px Arial;
  }
`