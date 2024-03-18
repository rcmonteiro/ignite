import styled from 'styled-components'

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
