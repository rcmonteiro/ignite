import styled from 'styled-components'

export const PaymentContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
  margin-top: 0.75rem;
`

export const PaymentHeader = styled.div`
  display: flex;

  svg {
    color: ${(props) => props.theme.purple};
    margin-right: 0.5rem;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const PaymentOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.75rem;
  margin-top: 2rem;

  button {
    background-color: ${(props) => props.theme['base-button']};
    border: none;
    padding: 1rem;
    border-radius: 6px;
    text-transform: uppercase;
    align-content: center;
    justify-content: flex-start;
    display: flex;
    gap: 0.75rem;

    svg {
      color: ${(props) => props.theme.purple};
    }
  }
`
