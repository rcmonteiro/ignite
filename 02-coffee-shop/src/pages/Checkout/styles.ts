import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const CheckoutContainer = styled.main`
  display: flex;
  gap: 2rem;
  h2 {
    margin-bottom: 1rem;
  }
  @media only screen and (max-width: 1120px) {
    flex-direction: column;
  }
`

export const OrderContainer = styled.div`
  width: 40rem;
  @media only screen and (max-width: 1120px) {
    width: 100%;
    padding: 1rem;
  }
`

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

export const AddressForm = styled.div`
  display: grid;
  margin-top: 2rem;
  grid-template-columns: 12.5rem 1fr 3.75rem;

  grid-template-areas:
    'zip . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
  grid-gap: 1rem 0.75rem;
`
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
    border: 1px solid transparent;
    padding: 1rem;
    border-radius: 6px;
    text-transform: uppercase;
    align-content: center;
    justify-content: flex-start;
    display: flex;
    gap: 0.75rem;
    cursor: pointer;

    svg {
      color: ${(props) => props.theme.purple};
    }

    &:hover {
      background-color: ${(props) => props.theme['base-hover']};
    }

    &.selected {
      background-color: ${(props) => props.theme['purple-light']};
      border-color: ${(props) => props.theme.purple};
    }
  }
`
export const PaymentErrorMessage = styled.p`
  ${mixins.fonts.textXS};
  font-weight: 400;
  color: red;
`
export const EmptyCart = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10rem;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  button {
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
`
