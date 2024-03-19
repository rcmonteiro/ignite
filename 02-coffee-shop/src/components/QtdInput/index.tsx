import { Minus, Plus } from '@phosphor-icons/react'
import { QtdInputContainer } from './style'

interface IQtdInput {
  quantity: number
  decQtd: () => void
  incQtd: () => void
}

export const QtdInput = ({ quantity = 1, decQtd, incQtd }: IQtdInput) => {
  return (
    <QtdInputContainer>
      <button onClick={decQtd}>
        <Minus size={14} />
      </button>
      <span>{quantity}</span>
      <button onClick={incQtd}>
        <Plus size={14} />
      </button>
    </QtdInputContainer>
  )
}
