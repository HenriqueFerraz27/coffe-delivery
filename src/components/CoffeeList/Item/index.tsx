import { useEffect, useState } from 'react'
import * as S from './styles'
import { InputCounterItem } from '../..'
import { formattedPrice } from '../../../utils/formattedPrice'
import * as Icon from '@phosphor-icons/react'
import { useCart } from '../../../hooks/useCart'

interface Coffee {
  id: number
  image: string
  tags: string[]
  name: string
  description: string
  price: number
}

interface CoffeeItemProps {
  coffee: Coffee
}

export const CoffeeItem = ({
  coffee: { id, image, tags, name, description, price },
}: CoffeeItemProps) => {
  const [quantity, setQuantity] = useState(1)
  const [isItemAdded, setIsItemAdded] = useState(false)
  const { addItem } = useCart()

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1)
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1)
    }
  }

  const handleAddItem = () => {
    const newItem = { id, quantity }

    addItem(newItem)
    setIsItemAdded(true)
    setQuantity(1)
  }

  useEffect(() => {
    let timeout: number

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false)
      }, 1000)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [isItemAdded])

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

      <S.ItemOrder $itemAdded={isItemAdded}>
        <strong>{formattedPrice(price)}</strong>

        <div>
          <InputCounterItem
            quantity={quantity}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
          />

          <button onClick={handleAddItem}>
            {isItemAdded && <Icon.CheckFat weight='fill' />}
            {!isItemAdded && <Icon.ShoppingCart weight='fill' />}
          </button>
        </div>
      </S.ItemOrder>
    </S.CoffeeItem>
  )
}
