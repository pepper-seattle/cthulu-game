import styled from 'styled-components'

export const NewGameButton = styled.button`
  background-color: ${props => props.theme.color.primary};
  color: ${props => props.theme.color.secondary};
  border: 2px solid ${props => props.theme.color.secondary};
  width: 240px;
  height: 50px;
  transition: background-color 0.2s ease;
  text-transform: uppercase;
  outline: none;
  font-size: ${props => props.theme.typography.fontSize[18]};
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.color.primary};
    background-color: ${props => props.theme.color.secondary};
  }
`