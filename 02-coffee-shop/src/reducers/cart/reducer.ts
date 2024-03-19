import { produce } from 'immer'
import { IAddress, IProduct } from '../../contexts/CartContext'
import { ActionTypes } from './actions'

interface ICartDispatch {
  type: ActionTypes
  payload: {
    product?: IProduct
    productId?: string
    quantity?: number
    type?: string
    address?: IAddress
  }
}

interface ICartState {
  cartItems: IProduct[]
  paymentType: string
  address: IAddress | null
}

export const cartReducer = (state: ICartState, action: ICartDispatch) => {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_CART:
      return produce(state, (draft) => {
        if (!action.payload.product) return state
        const productIndex = state.cartItems.findIndex(
          (product) => product.id === action.payload.product?.id,
        )
        if (productIndex !== -1) {
          draft.cartItems[productIndex].quantity++
        } else {
          draft.cartItems.push(action.payload.product)
        }
      })
    case ActionTypes.REMOVE_PRODUCT_CART: {
      if (!action.payload.productId) return state
      const productIndex = state.cartItems.findIndex(
        (product) => product.id === action.payload.productId,
      )
      if (productIndex < 0) return state
      return produce(state, (draft) => {
        draft.cartItems.splice(productIndex, 1)
      })
    }
    case ActionTypes.UPDATE_PRODUCT_QTD_CART: {
      if (!action.payload.productId) return state
      const productIndex = state.cartItems.findIndex(
        (product) => product.id === action.payload.productId,
      )
      if (productIndex < 0) return state
      if (!action.payload.quantity) return state
      return produce(state, (draft) => {
        draft.cartItems[productIndex].quantity = action.payload.quantity ?? 0
      })
    }
    case ActionTypes.SET_PAYMENT_TYPE: {
      if (!action.payload.type) return state
      return produce(state, (draft) => {
        draft.paymentType = action.payload.type ?? ''
      })
    }
    case ActionTypes.SET_ADDRESS: {
      if (!action.payload.address) return state
      return produce(state, (draft) => {
        draft.address = action.payload.address ?? null
      })
    }
    default:
      return state
  }
}
