import { products } from '../../../data/products.json'
import { Hero } from './components/Hero'
import { Product } from './components/Product'
import { HomeContainer, Products } from './styles'

export const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <h2 className="title-l max-container">Nossos cafés</h2>
      <Products className="max-container">
        {products.map((item) => {
          return <Product key={item.id} product={item} />
        })}
      </Products>
    </HomeContainer>
  )
}
