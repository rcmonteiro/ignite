import { zodResolver } from '@hookform/resolvers/zod'
import { MapPinLine } from '@phosphor-icons/react'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { Radio } from '../../components/RadioInput'
import { TextInput } from '../../components/TextInput'
import { paymentOptions } from '../../constants/paymentOptions'
import { useCart } from '../../hooks/useCart'
import { Cart } from './components/Cart'
import {
  AddressContainer,
  AddressForm,
  AddressHeader,
  CheckoutContainer,
  EmptyCart,
  OrderContainer,
  PaymentContainer,
  PaymentErrorMessage,
  PaymentHeader,
  PaymentOptions,
} from './styles'

const newShopOrder = z.object({
  zip: z.number({ invalid_type_error: 'Informe o CEP' }),
  street: z.string().min(1, 'Informe a rua'),
  number: z.string().min(1, 'Informe o número'),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe a UF'),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export type IOrder = z.infer<typeof newShopOrder>

export const Checkout = () => {
  const { cartItems, setPaymentType, setAddress } = useCart()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IOrder>({
    resolver: zodResolver(newShopOrder),
  })

  const handleSubmitOrder: SubmitHandler<IOrder> = (data) => {
    console.log('testes')
    console.log(data)
    setAddress({
      zip: data.zip,
      city: data.city,
      region: data.state,
      street: data.street,
      neighborhood: data.neighborhood,
      number: data.number,
    })
    setPaymentType(data.paymentMethod)
    navigate('/confirmation')
  }

  const cep = watch('zip')
  const selectedPaymentMethod = watch('paymentMethod')

  useEffect(() => {
    if (cep > 1000000) {
      fetch(`http://viacep.com.br/ws/${cep}/json/`, { mode: 'cors' })
        .then((res) => res.json())
        .then((data) => {
          if (data.cep) {
            setValue('city', data.localidade)
            setValue('state', data.uf)
            setValue('neighborhood', data.bairro)
            setValue('street', data.logradouro)
          }
        })
    }
  }, [cep, setValue])

  return (
    <CheckoutContainer className="max-container">
      {cartItems.length === 0 ? (
        <EmptyCart>
          <h1>Oops... seu carrinho está vazio</h1>
          <NavLink to="/">
            <button>Ver cafés</button>
          </NavLink>
        </EmptyCart>
      ) : (
        <>
          <OrderContainer>
            <h2 className="title-xs">Complete seu pedido</h2>
            <form id="shopOrder" onSubmit={handleSubmit(handleSubmitOrder)}>
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
                  <TextInput
                    placeholder="CEP"
                    type="number"
                    containerProps={{ style: { gridArea: 'zip' } }}
                    error={errors.zip}
                    {...register('zip', { valueAsNumber: true })}
                  />
                  <TextInput
                    placeholder="Rua"
                    containerProps={{ style: { gridArea: 'street' } }}
                    error={errors.street}
                    {...register('street')}
                  />

                  <TextInput
                    placeholder="Número"
                    containerProps={{ style: { gridArea: 'number' } }}
                    error={errors.number}
                    {...register('number')}
                  />

                  <TextInput
                    placeholder="Complemento"
                    optional
                    containerProps={{ style: { gridArea: 'fullAddress' } }}
                    error={errors.fullAddress}
                    {...register('fullAddress')}
                  />

                  <TextInput
                    placeholder="Bairro"
                    containerProps={{ style: { gridArea: 'neighborhood' } }}
                    error={errors.neighborhood}
                    {...register('neighborhood')}
                  />

                  <TextInput
                    placeholder="Cidade"
                    containerProps={{ style: { gridArea: 'city' } }}
                    error={errors.city}
                    {...register('city')}
                  />

                  <TextInput
                    placeholder="UF"
                    maxLength={2}
                    containerProps={{ style: { gridArea: 'state' } }}
                    error={errors.state}
                    {...register('state')}
                  />
                </AddressForm>
              </AddressContainer>
              <PaymentContainer>
                <PaymentHeader>
                  <MapPinLine size={22} />
                  <div>
                    <p className="text-m">Pagamento</p>
                    <span className="text-s">
                      O pagamento é feito na entrega. Escolha a forma que deseja
                      pagar
                    </span>
                  </div>
                </PaymentHeader>
                <PaymentOptions>
                  {paymentOptions.map((option) => {
                    return (
                      <Radio
                        key={option.value}
                        isSelected={selectedPaymentMethod === option.value}
                        {...register('paymentMethod')}
                        value={option.value}
                      >
                        <option.icon size={16} />
                        <span>{option.label}</span>
                      </Radio>
                    )
                  })}

                  {errors.paymentMethod ? (
                    <PaymentErrorMessage role="alert">
                      {errors.paymentMethod.message}
                    </PaymentErrorMessage>
                  ) : null}
                </PaymentOptions>
              </PaymentContainer>
            </form>
          </OrderContainer>
          <Cart />
        </>
      )}
    </CheckoutContainer>
  )
}
