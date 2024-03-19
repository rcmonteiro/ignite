import { useCart } from '../../../../hooks/useCart'
import { CartProduct } from '../CartProduct'
import { CartContainer, OrderTotal } from './style'

export const Cart = () => {
  const { cartItems } = useCart()

  const shippingFee = 1.1
  const total = cartItems.reduce((ac, cur) => ac + cur.price * cur.quantity, 0)
  const shipping = cartItems.reduce(
    (ac, cur) => ac + cur.quantity * shippingFee,
    0,
  )

  return (
    <CartContainer>
      <h2 className="title-xs">Cafés selecionados</h2>
      <div>
        {cartItems.map((item) => (
          <CartProduct key={item.id} {...item} />
        ))}

        <OrderTotal className="text-s">
          <span>Total de itens</span>
          <span>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(total)}
          </span>

          <span>Entrega</span>
          <span>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(shipping)}
          </span>

          <strong className="text-l">Total</strong>
          <strong className="text-l">
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(total + shipping)}
          </strong>
        </OrderTotal>
        <button type="submit" form="shopOrder" className="size-g font-700">
          Confirmar Pedido
        </button>
      </div>
    </CartContainer>
  )
}
