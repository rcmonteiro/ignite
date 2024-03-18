import { products } from '../../constants/products'
import { Hero } from './components/Hero'
import { Product } from './components/Product'
import { HomeContainer, Products } from './styles'

export const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <h2 className="title-l max-container">Nossos cafés</h2>
      <Products className="max-container">
        {products.map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </Products>
    </HomeContainer>
  )
}
