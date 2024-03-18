import { Trash } from '@phosphor-icons/react'
import { QtdInput } from '../../../../components/QtdInput'
import { CartProductContainer } from './style'

export const CartProduct = () => {
  return (
    <CartProductContainer>
      <img
        src="/src/assets/products/americano.png"
        width={64}
        height={64}
        alt=""
      />
      <div>
        <p>Expresso Tradicional</p>
        <div>
          <QtdInput />
          <button>
            <Trash size={16} /> Remover
          </button>
        </div>
      </div>
      <strong>R$ 9,90</strong>
    </CartProductContainer>
  )
}
