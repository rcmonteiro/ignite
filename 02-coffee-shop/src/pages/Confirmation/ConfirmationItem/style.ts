import { styled } from 'styled-components'

export interface IConfirmationIcon {
  $bgColor: 'yellow-dark' | 'yellow' | 'purple'
}

export const ConfirmationIcon = styled.div<IConfirmationIcon>`
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 999px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme[props.$bgColor]};
`
