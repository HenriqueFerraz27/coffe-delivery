import * as Styled from '../../../styles/components'
import * as S from './styles'
import * as Icon from 'phosphor-react'

export const CoffeeItem = () => {
  return (
    <S.CoffeeItem>
      <S.ItemContainer>
        <S.ItemHeader>
          <img
            src='/coffees/expresso-tradicional.png'
            alt='Expresso Tradicional'
          />
          <span>TRADICIONAL</span>
        </S.ItemHeader>

        <S.ItemContent>
          <strong>Expresso Tradicional</strong>
          <p>O tradicional café feito com água quente e grãos moídos</p>
        </S.ItemContent>
      </S.ItemContainer>

      <S.ItemBuy>
        <strong>R$ 9,90</strong>

        <div>
          <Styled.CouterButton>
            <input type='number' defaultValue={1} min={1} readOnly />
            <div>
              <span>--</span>
              <span>+</span>
            </div>
          </Styled.CouterButton>
          <button>
            <Icon.ShoppingCart weight='fill' />
          </button>
        </div>
      </S.ItemBuy>
    </S.CoffeeItem>
  )
}
