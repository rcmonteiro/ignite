import { CartProduct } from '../CartProduct'
import { CartContainer, OrderTotal } from './style'

export const Cart = () => {
  return (
    <CartContainer>
      <h2 className="title-xs">Cafés selecionados</h2>
      <div>
        <CartProduct />
        <CartProduct />

        <OrderTotal className="text-s">
          <span>Total de itens</span>
          <span>R$ 29,70</span>

          <span>Entrega</span>
          <span>R$ 3,50</span>

          <strong className="text-l">Total</strong>
          <strong className="text-l">R$ 33,20</strong>
        </OrderTotal>
        <button className="size-g font-700">Confirmar Pedido</button>
      </div>
    </CartContainer>
  )
}
