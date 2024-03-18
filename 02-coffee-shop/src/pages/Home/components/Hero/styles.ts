import styled from 'styled-components'

export const HeroContainer = styled.section`
  background-image: url(/src/assets/hero-background.svg);
  background-repeat: repeat-x;
  background-position: 0 0;
  margin-bottom: 2rem;
  & > div {
    display: flex;
    margin-top: 5.75rem;
    margin-bottom: 6.75rem;
    gap: 3.5rem;
  }

  & > div > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  & > p {
    color: ${(props) => props.theme['base-subtitle']};
  }

  @media only screen and (max-width: 1120px) {
    img {
      display: none;
    }
    background-position: center;
    margin: 0 -1rem;
    padding: 0 1rem;
  }
`

export const HeroItemContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1.25rem;
  margin-top: 4.125rem;

  @media only screen and (max-width: 1120px) {
    grid-template-columns: auto;
  }
`
export const HeroItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface IHeroIcon {
  $bgColor: 'yellow-dark' | 'yellow' | 'purple' | 'base-text'
}

export const HeroIcon = styled.div<IHeroIcon>`
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 999px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme[props.$bgColor]};
`
