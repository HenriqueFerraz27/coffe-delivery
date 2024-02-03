import { useCart } from '../../../hooks/useCart'
import { formattedPrice } from '../../../utils/formattedPrice'
import { Coffee } from '../../'
import * as S from './styles'

export const CartTotal = () => {
  const { cart } = useCart()

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
              <span>Total de Itens</span> <span>{formattedPrice(10)}</span>
            </div>
            <div>
              <span>Entrega</span> <span>{formattedPrice(10)}</span>
            </div>
            <div>
              <strong>Total</strong> <strong>{formattedPrice(10)}</strong>
            </div>
          </S.CoffeesTotal>

          <S.ConfirmButton
            // className={isDisable ? 'confirm-button--disable' : ''}
            type='submit'
            form='order'
          >
            Confirmar Pedido
          </S.ConfirmButton>
        </div>
      </S.Coffees>
    </S.CartTotal>
  )
}
