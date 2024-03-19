import { Trash } from '@phosphor-icons/react'
import { QtdInput } from '../../../../components/QtdInput'
import { IProduct } from '../../../../contexts/CartContext'
import { useCart } from '../../../../hooks/useCart'
import { CartProductContainer } from './style'

export const CartProduct = (item: IProduct) => {
  const { removeProductToCart, updateProductQtd } = useCart()

  const handleRemoveProductToCart = () => {
    removeProductToCart(item.id)
  }

  const handleIncQtd = () => {
    let newQtd = item.quantity + 1
    if (newQtd > 10) newQtd = 10
    updateProductQtd(newQtd, item.id)
  }

  const handleDecQtd = () => {
    const newQtd = item.quantity - 1
    if (newQtd < 1) {
      removeProductToCart(item.id)
    } else {
      updateProductQtd(newQtd, item.id)
    }
  }

  return (
    <CartProductContainer>
      <img src={item.image} width={64} height={64} alt="" />
      <div>
        <p>{item.title}</p>
        <div>
          <QtdInput
            quantity={item.quantity}
            decQtd={handleDecQtd}
            incQtd={handleIncQtd}
          />
          <button onClick={() => handleRemoveProductToCart()}>
            <Trash size={16} /> Remover
          </button>
        </div>
      </div>
      <strong>R$ {item.price}</strong>
    </CartProductContainer>
  )
}
