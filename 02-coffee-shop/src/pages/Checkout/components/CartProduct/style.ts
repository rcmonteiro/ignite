import styled from 'styled-components'

export const CartProductContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  justify-content: space-between;
  padding: 0 0 1.5rem 0;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  & > div {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 0;

    p {
      margin-bottom: 0.5rem;
    }

    & > div {
      display: flex;
      padding: 0;
      gap: 0.5rem;

      & > button {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        background-color: ${(props) => props.theme['base-button']};
        border: none;
        border-radius: 6px;
        padding: 0.5rem;
      }
      button svg {
        color: ${(props) => props.theme.purple};
      }
    }
  }
`
