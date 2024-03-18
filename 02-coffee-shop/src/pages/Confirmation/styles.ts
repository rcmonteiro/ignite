import { styled } from 'styled-components'

export const ConfirmationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 5rem;

  @media only screen and (max-width: 1120px) {
    flex-direction: column;
    align-items: center;
    img {
      margin-top: 2rem;
    }
  }

  h1 {
    color: ${(props) => props.theme['yellow-dark']};
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    @media only screen and (max-width: 1120px) {
      width: 100%;
      padding: 2rem;
    }
  }
`

export const ConfirmationDetails = styled.div`
  position: relative;
  padding: 2.5rem;
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 6px;
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;
    border: 1px solid transparent;
    background: linear-gradient(
        90deg,
        ${(props) => props.theme.yellow},
        ${(props) => props.theme.purple}
      )
      border-box;
    -webkit-mask:
      linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }

  & > div {
    display: flex;
    gap: 0.75rem;
    align-items: flex-start;
    & > div {
      display: flex;
      flex-direction: column;
    }
  }
`
