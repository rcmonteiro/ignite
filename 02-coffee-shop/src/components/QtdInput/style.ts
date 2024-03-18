import styled from 'styled-components'

export const QtdInputContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-button']};
  padding: 0.65rem;

  button {
    color: ${(props) => props.theme.purple};
    border: none;
    background-color: transparent;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme['purple-dark']};
      background-color: transparent;
    }
  }

  span {
    width: 1.25rem;
  }
`
