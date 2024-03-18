import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1120px) {
    padding: 1rem;
  }
`

export const Products = styled.section`
  margin: 3.375rem auto;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media only screen and (max-width: 1120px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media only screen and (max-width: 928px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`
