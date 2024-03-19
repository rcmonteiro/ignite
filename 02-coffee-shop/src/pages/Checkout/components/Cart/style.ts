import styled from 'styled-components'

export const CartContainer = styled.aside`
  width: 28rem;
  @media only screen and (max-width: 1120px) {
    width: 100%;
    padding: 1rem;
  }

  & > div {
    background-color: ${(props) => props.theme['base-card']};
    padding: 2.5rem;
    border-radius: 6px;
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;
    display: flex;
    flex-direction: column;

    button[type='submit'] {
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme.yellow};
      border: none;
      width: 100%;
      padding: 0.75rem;
      text-transform: uppercase;
      border-radius: 6px;
      margin-top: 1.5rem;
      cursor: pointer;
    }
  }
`
export const OrderTotal = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;

  span,
  strong {
    margin-bottom: 0.75rem;
  }
`
