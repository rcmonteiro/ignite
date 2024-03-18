import { ReactNode } from 'react'
import { ConfirmationIcon } from './style'

interface IConfirmationItem {
  icon: ReactNode
  bgColor: 'yellow-dark' | 'yellow' | 'purple'
  children: ReactNode
}

export const ConfirmationItem = ({
  icon,
  bgColor,
  children,
}: IConfirmationItem) => {
  return (
    <div>
      <ConfirmationIcon $bgColor={bgColor}>{icon}</ConfirmationIcon>
      <div>{children}</div>
    </div>
  )
}
