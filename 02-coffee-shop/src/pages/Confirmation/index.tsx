import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import ConfirmationImage from '../../assets/confirmation-image.png'
import { useCart } from '../../hooks/useCart'
import { ConfirmationItem } from './ConfirmationItem'
import { ConfirmationContainer, ConfirmationDetails } from './styles'

export const Confirmation = () => {
  const { paymentType, address } = useCart()

  return (
    <ConfirmationContainer className="max-container">
      <div>
        <h1 className="title-l">Uhu! Pedido confirmado</h1>
        <p className="text-l">
          Agora é só aguardar que logo o café chegará até você
        </p>
        <ConfirmationDetails>
          <ConfirmationItem
            bgColor="purple"
            icon={<MapPin size={16} weight="fill" />}
          >
            <p>
              Entrega em <strong>{address?.street}</strong>
            </p>
            <p>
              {address?.neighborhood} - {address?.city}, {address?.region}
            </p>
          </ConfirmationItem>
          <ConfirmationItem
            bgColor="yellow"
            icon={<Timer size={16} weight="fill" />}
          >
            <p>Previsão de entrega</p>
            <p>
              <strong>20 min - 30 min</strong>
            </p>
          </ConfirmationItem>
          <ConfirmationItem
            bgColor="yellow-dark"
            icon={<CurrencyDollar size={16} />}
          >
            <p>Pagamento na entrega</p>
            <p>
              <strong>{paymentType}</strong>
            </p>
          </ConfirmationItem>
        </ConfirmationDetails>
      </div>
      <img src={ConfirmationImage} width={492} height={293} alt="" />
    </ConfirmationContainer>
  )
}
