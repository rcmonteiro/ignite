import { Minus, Plus } from '@phosphor-icons/react'
import { QtdInputContainer } from './style'

export const QtdInput = () => {
  return (
    <QtdInputContainer>
      <button>
        <Minus size={14} />
      </button>
      <span>1</span>
      <button>
        <Plus size={14} />
      </button>
    </QtdInputContainer>
  )
}
