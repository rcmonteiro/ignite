import styled from 'styled-components'

export const AddressContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
`

export const AddressHeader = styled.div`
  display: flex;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
    margin-right: 0.5rem;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const AddressForm = styled.form`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 0.75rem;
  margin-top: 2rem;

  .large {
    grid-column: 1/4;
  }
  .medium {
    grid-column: 2/4;
  }

  input {
    border: 1px solid ${(props) => props.theme['base-button']};
    background-color: ${(props) => props.theme['base-input']};
    border-radius: 4px;
    padding: 0.75rem;
    width: 100%;
  }
`
