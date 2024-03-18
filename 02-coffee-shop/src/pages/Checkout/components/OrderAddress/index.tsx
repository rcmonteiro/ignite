import { MapPinLine } from '@phosphor-icons/react'
import { AddressContainer, AddressForm, AddressHeader } from './style'

export const OrderAddress = () => {
  return (
    <AddressContainer>
      <AddressHeader>
        <MapPinLine size={22} />
        <div>
          <p className="text-m">Endereço de Entrega</p>
          <span className="text-s">
            Informe o endereço onde deseja receber seu pedido
          </span>
        </div>
      </AddressHeader>
      <AddressForm>
        <input placeholder="CEP" />
        <input className="large" placeholder="Rua" />
        <input placeholder="Número" />
        <input className="medium" placeholder="Complemento" />
        <input placeholder="Bairro" />
        <input placeholder="Cidade" />
        <input placeholder="UF" />
      </AddressForm>
    </AddressContainer>
  )
}
