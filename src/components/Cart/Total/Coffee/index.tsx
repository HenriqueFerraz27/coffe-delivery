import { InputCounterItem } from '../../..'
import { useCart } from '../../../../hooks/useCart'
import { Item } from '../../../../reducers/cart/reducer'
import { formattedPrice } from '../../../../utils/formattedPrice'
import { coffees } from '../../../../datas/coffees.json'
import * as S from './styles'
import * as Icon from '@phosphor-icons/react'

interface CoffeeProps {
  coffee: Item
}

export const Coffee = ({ coffee: { id, quantity } }: CoffeeProps) => {
  const { decrementItemQuantity, incrementItemQuantity, removeItem } = useCart()

  const coffeeInfos = coffees.find(coffee => coffee.id === id)
  let coffee = coffees[0]

  if (coffeeInfos) {
    const newCoffee = { ...coffeeInfos, quantity }

    coffee = newCoffee
  }

  return (
    <S.CoffeeItem>
      <div className='item__content'>
        <img className='item__img' src={coffee.image} alt={coffee.name} />

        <div className='item__wrapper'>
          <strong className='item__name'>{coffee.name}</strong>

          <div className='item__buy'>
            <strong>{formattedPrice(coffee.price * quantity)}</strong>

            <InputCounterItem
              quantity={quantity}
              handleDecrement={() => decrementItemQuantity(id)}
              handleIncrement={() => incrementItemQuantity(id)}
            />
          </div>
        </div>
      </div>

      <S.ItemDelete onClick={() => removeItem(id)}>
        <Icon.Trash />
      </S.ItemDelete>
    </S.CoffeeItem>
  )
}
