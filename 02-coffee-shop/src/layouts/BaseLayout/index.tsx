import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { BaseContainer } from './styles'

export const BaseLayout = () => {
  return (
    <BaseContainer>
      <Header />
      <Outlet />
    </BaseContainer>
  )
}
