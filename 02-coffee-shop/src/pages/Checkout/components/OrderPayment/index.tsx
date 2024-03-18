import { Bank, CreditCard, MapPinLine, Money } from '@phosphor-icons/react'
import { PaymentContainer, PaymentHeader, PaymentOptions } from './style'

export const OrderPayment = () => {
  return (
    <PaymentContainer>
      <PaymentHeader>
        <MapPinLine size={22} />
        <div>
          <p className="text-m">Pagamento</p>
          <span className="text-s">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </PaymentHeader>
      <PaymentOptions>
        <button>
          <CreditCard size={16} />
          Cartão de Crédito
        </button>
        <button>
          <Bank size={16} />
          Cartão de Débito
        </button>
        <button>
          <Money size={16} />
          Dinheiro
        </button>
      </PaymentOptions>
    </PaymentContainer>
  )
}
