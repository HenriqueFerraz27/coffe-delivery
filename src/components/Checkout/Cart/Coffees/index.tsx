import * as S from './styles'
import { Coffee } from '../../../'

export const Coffees = () => {
  return (
    <S.Coffees>
      <S.CoffeesList>
        <Coffee />
      </S.CoffeesList>

      <div>
        <S.CoffeesTotal>
          <div>
            <span>Total de Itens</span> <span>R$ 29,70</span>
          </div>
          <div>
            <span>Entrega</span> <span>R$ 03,50</span>
          </div>
          <div>
            <strong>Total</strong> <strong>R$ 32,20</strong>
          </div>
        </S.CoffeesTotal>

        <S.ConfirmButton>Confirmar Pedido</S.ConfirmButton>
      </div>
    </S.Coffees>
  )
}
