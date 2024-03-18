import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import ConfirmationImage from '../../assets/confirmation-image.png'
import { ConfirmationItem } from './ConfirmationItem'
import { ConfirmationContainer, ConfirmationDetails } from './styles'

export const Confirmation = () => {
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
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
            </p>
            <p>Farrapos - Porto Alegre, RS</p>
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
              <strong>Cartão de Crédito</strong>
            </p>
          </ConfirmationItem>
        </ConfirmationDetails>
      </div>
      <img src={ConfirmationImage} width={492} height={293} alt="" />
    </ConfirmationContainer>
  )
}
