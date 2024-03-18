import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/coffee-logo.svg'
import {
  CartIndicator,
  HeaderContainer,
  NavAddress,
  NavCart,
  NavContainer,
} from './styles'

export const Header = () => {
  return (
    <HeaderContainer className="max-container">
      <NavLink to="/">
        <img src={Logo} width={85} height={40} alt="Coffee Delivery" />
      </NavLink>
      <NavContainer>
        <NavAddress className="text-s">
          <MapPin size={22} weight="fill" />
          Camboriú, SC
        </NavAddress>
        <NavCart>
          <NavLink to="/checkout">
            <ShoppingCartSimple size={22} weight="fill" />
          </NavLink>
          <CartIndicator className="font-700 text-s">4</CartIndicator>
        </NavCart>
      </NavContainer>
    </HeaderContainer>
  )
}
