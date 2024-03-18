import {
  Coffee,
  Package,
  ShoppingCartSimple,
  Timer,
} from '@phosphor-icons/react'
import HeroImage from '../../../../assets/hero-image.png'
import { HeroContainer, HeroIcon, HeroItem, HeroItemContainer } from './styles'

export const Hero = () => {
  return (
    <HeroContainer>
      <div className="max-container">
        <div>
          <h1 className="title-xl">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="text-l">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <HeroItemContainer>
            <HeroItem>
              <HeroIcon $bgColor="yellow-dark">
                <ShoppingCartSimple size={16} weight="fill" />
              </HeroIcon>
              Compra simples e segura
            </HeroItem>
            <HeroItem>
              <HeroIcon $bgColor="base-text">
                <Package size={16} weight="fill" />
              </HeroIcon>
              Embalagem mantém o café intacto
            </HeroItem>
            <HeroItem>
              <HeroIcon $bgColor="yellow">
                <Timer size={16} weight="fill" />
              </HeroIcon>
              Entrega rápida e rastreada
            </HeroItem>
            <HeroItem>
              <HeroIcon $bgColor="purple">
                <Coffee size={16} weight="fill" />
              </HeroIcon>{' '}
              O café chega fresquinho até você
            </HeroItem>
          </HeroItemContainer>
        </div>
        <img src={HeroImage} alt="" width={476} height={360} />
      </div>
    </HeroContainer>
  )
}
