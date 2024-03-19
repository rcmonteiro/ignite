import styled from 'styled-components'

export const ProductContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  & img {
    margin-top: -2.5rem;
  }

  & h3 {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  footer {
    display: flex;
    margin-top: 2rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 0.5rem;

    .price {
      flex: 1;
      text-align: left;
    }
  }
`

interface ICartButton {
  $isAdded: boolean
}

export const CartButton = styled.button<ICartButton>`
  background-color: ${({ theme, $isAdded }) =>
    $isAdded ? theme.yellow : theme['purple-dark']};
  border: none;
  border-radius: 6px;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, $isAdded }) =>
      $isAdded ? theme.yellow : theme.purple};
  }
`

export const Tags = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 0.75rem;

  .tag {
    padding: 0.25rem 0.5rem;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    border-radius: 100px;
  }
`
