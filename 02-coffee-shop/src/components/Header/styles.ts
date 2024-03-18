import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem 0;

  aside {
    display: flex;
  }

  @media only screen and (max-width: 1120px) {
    padding: 2rem 1rem;
  }
`
export const NavContainer = styled.aside`
  display: flex;
  gap: 0.75rem;
`

export const NavAddress = styled.div`
  border-radius: 6px;
  background-color: ${(props) => props.theme['purple-light']};
  padding: 0.5rem;
  color: ${(props) => props.theme['purple-dark']};
  display: flex;
  align-items: center;
  gap: 0.4rem;

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const NavCart = styled.div`
  position: relative;
  border-radius: 6px;
  background-color: ${(props) => props.theme['yellow-light']};
  padding: 0.5rem;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme['yellow-dark']};
`

export const CartIndicator = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme['yellow-dark']};
  padding: 0;
  width: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.white};
  border-radius: 999px;
  top: -0.5rem;
  right: -0.5rem;
  aspect-ratio: 1 / 1;
`
