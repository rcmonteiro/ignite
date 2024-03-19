import { ReactNode, createContext, useReducer } from 'react'
import {
  addProductToCartAction,
  removeProductToCartAction,
  setAddressAction,
  setPaymentTypeAction,
  updateProductQtdAction,
} from '../reducers/cart/actions'
import { cartReducer } from '../reducers/cart/reducer'

export interface IProduct {
  id: string
  image: string
  title: string
  price: number
  quantity: number
}

export interface IAddress {
  zip: number
  number?: string
  city: string
  region: string
  neighborhood: string
  street: string
}

interface ICartContext {
  cartItems: IProduct[]
  paymentType: string
  address: IAddress | null
  addProductToCart: (product: IProduct) => void
  removeProductToCart: (productId: string) => void
  updateProductQtd: (quantity: number, productId: string) => void
  setPaymentType: (type: string) => void
  setAddress: (address: IAddress) => void
}

export const CartContext = createContext({} as ICartContext)

interface ICartContextProvider {
  children: ReactNode
}

export const CartContextProvider = ({ children }: ICartContextProvider) => {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cartItems: [],
    paymentType: '',
    address: null,
  })

  const { cartItems, paymentType, address } = cartState

  const addProductToCart = (product: IProduct) => {
    dispatch(addProductToCartAction(product))
  }

  const removeProductToCart = (productId: string) => {
    dispatch(removeProductToCartAction(productId))
  }

  const updateProductQtd = (quantity: number, productId: string) => {
    dispatch(updateProductQtdAction(quantity, productId))
  }

  const setPaymentType = (type: string) => {
    dispatch(setPaymentTypeAction(type))
  }

  const setAddress = (address: IAddress) => {
    dispatch(setAddressAction(address))
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        paymentType,
        address,
        addProductToCart,
        removeProductToCart,
        updateProductQtd,
        setPaymentType,
        setAddress,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
