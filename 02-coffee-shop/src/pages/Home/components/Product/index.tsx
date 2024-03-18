import { ShoppingCartSimple } from '@phosphor-icons/react'
import { QtdInput } from '../../../../components/QtdInput'
import { ProductContainer, Tags } from './styles'

interface IProduct {
  id: string
  image: string
  title: string
  tags: string[]
  description: string
  price: number
}

export const Product = ({
  title,
  tags,
  description,
  image,
  price,
}: IProduct) => {
  return (
    <ProductContainer>
      <img src={image} width={120} height={120} alt="" />
      <Tags>
        {tags.map((tag) => {
          return (
            <span className="tag" key={tag}>
              {tag}
            </span>
          )
        })}
      </Tags>
      <h3 className="title-s">{title}</h3>
      <p>{description}</p>
      <footer>
        <div className="text-s price">
          R${' '}
          <strong className="title-m">
            {new Intl.NumberFormat('pt-BR', {
              style: 'decimal',
              minimumFractionDigits: 2,
            }).format(price)}
          </strong>
        </div>
        <QtdInput />
        <button>
          <ShoppingCartSimple size={22} weight="fill" />
        </button>
      </footer>
    </ProductContainer>
  )
}
