import { CheckFat, ShoppingCartSimple } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import { QtdInput } from '../../../../components/QtdInput'
import { useCart } from '../../../../hooks/useCart'
import { CartButton, ProductContainer, Tags } from './styles'

interface IProduct {
  product: {
    id: string
    image: string
    title: string
    tags: string[]
    description: string
    price: number
  }
}

export const Product = ({ product }: IProduct) => {
  const { addProductToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [isAdded, setIsAdded] = useState(false)
  const theme = useTheme()

  useEffect(() => {
    let timeout: number

    if (isAdded) {
      timeout = setTimeout(() => {
        setIsAdded(false)
      }, 1000)
    }

    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [isAdded])

  const handleAddToCart = ({ product }: IProduct) => {
    const item = {
      id: product.id,
      image: product.image,
      title: product.title,
      price: product.price,
      quantity,
    }
    addProductToCart(item)
    setIsAdded(true)
  }

  const handleIncQtd = () => {
    let newQtd = quantity + 1
    if (newQtd > 10) newQtd = 10
    setQuantity(newQtd)
  }

  const handleDecQtd = () => {
    let newQtd = quantity - 1
    if (newQtd < 1) newQtd = 1
    setQuantity(newQtd)
  }

  return (
    <ProductContainer>
      <img src={product.image} width={120} height={120} alt="" />
      <Tags>
        {product.tags.map((tag) => {
          return (
            <span className="tag" key={tag}>
              {tag}
            </span>
          )
        })}
      </Tags>
      <h3 className="title-s">{product.title}</h3>
      <p>{product.description}</p>
      <footer>
        <div className="text-s price">
          R${' '}
          <strong className="title-m">
            {new Intl.NumberFormat('pt-BR', {
              style: 'decimal',
              minimumFractionDigits: 2,
            }).format(product.price)}
          </strong>
        </div>
        <QtdInput
          quantity={quantity}
          decQtd={handleDecQtd}
          incQtd={handleIncQtd}
        />
        <CartButton
          $isAdded={isAdded}
          onClick={() => handleAddToCart({ product })}
        >
          {isAdded ? (
            <CheckFat size={22} weight="fill" color={theme['base-card']} />
          ) : (
            <ShoppingCartSimple
              size={22}
              weight="fill"
              color={theme['base-card']}
            />
          )}
        </CartButton>
      </footer>
    </ProductContainer>
  )
}
