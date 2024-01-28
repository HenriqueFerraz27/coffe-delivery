import { useState } from 'react'
import * as S from './styles'
import * as Icon from 'phosphor-react'
import { useCartItems } from '../../../hooks/useCartItems'
import { CartItem } from '../../../@types/cart-items'
import { InputCounterItem } from '../..'
import { formattedPrice } from '../../../utils/formattedPrice'
import { Coffee } from '../../../@types/coffee'

interface CoffeeItemProps {
  coffee: Coffee
}

export const CoffeeItem = ({
  coffee: { image, tags, name, description, price },
}: CoffeeItemProps) => {
  const { setCartItems } = useCartItems()
  const [quantityItem, setQuantityItem] = useState(1)

  const handleIncrement = () => {
    setQuantityItem(prevQuantityItem => prevQuantityItem + 1)
  }

  const handleDecrement = () => {
    if (quantityItem > 1) {
      setQuantityItem(prevQuantityItem => prevQuantityItem - 1)
    }
  }

  const handleAddNewCoffe = () => {
    const newItem: CartItem = {
      id: new Date().getMilliseconds(),
      image: image,
      tags: tags,
      name: name,
      description: description,
      price: price,
      quantity: quantityItem,
    }

    setCartItems(state => {
      return [...state, newItem]
    })
    setQuantityItem(1)
  }

  return (
    <S.CoffeeItem>
      <S.ItemContainer>
        <S.ItemHeader>
          <img src={image} alt={name} />
          <div>
            {tags.map(tag => {
              return <span key={tag}>{tag}</span>
            })}
          </div>
        </S.ItemHeader>

        <S.ItemContent>
          <strong>{name}</strong>
          <p>{description}</p>
        </S.ItemContent>
      </S.ItemContainer>

      <S.ItemBuy>
        <strong>{formattedPrice(price)}</strong>

        <div>
          <InputCounterItem
            quantityItem={quantityItem}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
          />
          <button onClick={handleAddNewCoffe}>
            <Icon.ShoppingCart weight='fill' />
          </button>
        </div>
      </S.ItemBuy>
    </S.CoffeeItem>
  )
}
