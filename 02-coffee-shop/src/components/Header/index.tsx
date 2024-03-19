import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/coffee-logo.svg'
import { useCart } from '../../hooks/useCart'
import {
  CartIndicator,
  HeaderContainer,
  NavAddress,
  NavCart,
  NavContainer,
} from './styles'

export const Header = () => {
  const { address, cartItems } = useCart()

  return (
    <HeaderContainer className="max-container">
      <NavLink to="/">
        <img src={Logo} width={85} height={40} alt="Coffee Delivery" />
      </NavLink>
      <NavContainer>
        {address && (
          <NavAddress className="text-s">
            <MapPin size={22} weight="fill" />
            {address?.city}, {address?.region}
          </NavAddress>
        )}
        <NavLink to="/checkout">
          <NavCart>
            <ShoppingCartSimple size={22} weight="fill" />

            {cartItems.length > 0 && (
              <CartIndicator className="font-700 text-s">
                {cartItems.length}
              </CartIndicator>
            )}
          </NavCart>
        </NavLink>
      </NavContainer>
    </HeaderContainer>
  )
}
