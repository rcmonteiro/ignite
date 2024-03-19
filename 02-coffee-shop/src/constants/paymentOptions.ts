import { Bank, CreditCard, Money } from '@phosphor-icons/react'

export const paymentOptions = [
  {
    label: 'Cartão de Crédito',
    icon: CreditCard,
    value: 'credit',
  },
  {
    label: 'Cartão de Débito',
    icon: Bank,
    value: 'debit',
  },
  {
    label: 'Dinheiro',
    icon: Money,
    value: 'cash',
  },
]
