import { IAddress, IProduct } from '../../contexts/CartContext'

export enum ActionTypes {
  ADD_PRODUCT_CART = 'ADD_PRODUCT_CART',
  REMOVE_PRODUCT_CART = 'REMOVE_PRODUCT_CART',
  UPDATE_PRODUCT_QTD_CART = 'UPDATE_PRODUCT_QTD_CART',
  SET_PAYMENT_TYPE = 'SET_PAYMENT_TYPE',
  SET_ADDRESS = 'SET_ADDRESS',
}

export const addProductToCartAction = (product: IProduct) => {
  return {
    type: ActionTypes.ADD_PRODUCT_CART,
    payload: {
      product,
    },
  }
}

export const removeProductToCartAction = (productId: string) => {
  return {
    type: ActionTypes.REMOVE_PRODUCT_CART,
    payload: {
      productId,
    },
  }
}

export const updateProductQtdAction = (quantity: number, productId: string) => {
  return {
    type: ActionTypes.UPDATE_PRODUCT_QTD_CART,
    payload: {
      quantity,
      productId,
    },
  }
}

export const setPaymentTypeAction = (type: string) => {
  return {
    type: ActionTypes.SET_PAYMENT_TYPE,
    payload: {
      type,
    },
  }
}

export const setAddressAction = (address: IAddress) => {
  return {
    type: ActionTypes.SET_ADDRESS,
    payload: {
      address,
    },
  }
}
