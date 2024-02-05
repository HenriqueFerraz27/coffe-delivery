import { useCart } from '../../../hooks/useCart'
import { formattedPrice } from '../../../utils/formattedPrice'
import { Coffee } from '../../'
import { coffees } from '../../../datas/coffees.json'
import * as S from './styles'
import { useFormContext } from 'react-hook-form'
import { NewOrderData } from '../../../schemas/newOrder'

export const CartTotal = () => {
  const { cart } = useCart()

  const { handleSubmit } = useFormContext<NewOrderData>()

  const handleCreateNewOrder = (data: NewOrderData) => {
    console.log(data)
  }

  const totalItemsPrice = cart.reduce((total, { id, quantity }) => {
    const coffeeInfo = coffees.find(coffee => coffee.id === id)

    if (!coffeeInfo) {
      throw new Error('Invalid coffee.')
    }

    return total + coffeeInfo.price * quantity
  }, 0)

  const shippingPrice = Math.ceil(
    Math.min(10, Math.max(3, totalItemsPrice / 10))
  )

  const totalPrice = totalItemsPrice + shippingPrice

  return (
    <S.CartTotal>
      <S.Coffees>
        <S.CoffeesList>
          {cart.map(item => {
            return <Coffee key={item.id} coffee={item} />
          })}
        </S.CoffeesList>

        <div>
          <S.CoffeesTotal>
            <div>
              <span>Total de Itens</span>{' '}
              <span>{formattedPrice(totalItemsPrice)}</span>
            </div>
            <div>
              <span>Entrega</span> <span>{formattedPrice(shippingPrice)}</span>
            </div>
            <div>
              <strong>Total</strong>{' '}
              <strong>{formattedPrice(totalPrice)}</strong>
            </div>
          </S.CoffeesTotal>

          <S.ConfirmButton
            // className={isDisable ? 'confirm-button--disable' : ''}
            type='submit'
            form='order'
            onClick={handleSubmit(handleCreateNewOrder)}
          >
            Confirmar Pedido
          </S.ConfirmButton>
        </div>
      </S.Coffees>
    </S.CartTotal>
  )
}
