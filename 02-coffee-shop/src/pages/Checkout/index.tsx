import { Cart } from './components/Cart'
import { OrderAddress } from './components/OrderAddress'
import { OrderPayment } from './components/OrderPayment'
import { CheckoutContainer, OrderContainer } from './styles'
export const Checkout = () => {
  return (
    <CheckoutContainer className="max-container">
      <OrderContainer>
        <h2 className="title-xs">Complete seu pedido</h2>
        <OrderAddress />
        <OrderPayment />
      </OrderContainer>
      <Cart />
    </CheckoutContainer>
  )
}
