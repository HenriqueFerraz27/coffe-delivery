import * as S from './styles'
import * as Styled from '../../../../styles/components'
import * as Icon from 'phosphor-react'

export const Coffees = () => {
  return (
    <S.Coffees>
      <S.CoffeesList>
        <S.CoffeeItem>
          <div className='item__content'>
            <img
              className='item__img'
              src='/coffees/expresso-tradicional.png'
              alt='Expresso Tradicional'
            />

            <div className='item__wrapper'>
              <strong className='item__name'>Expresso Tradicional</strong>

              <div className='item__buy'>
                <strong>R$ 9,90</strong>

                <Styled.CouterButton>
                  <input type='number' defaultValue={1} min={1} readOnly />
                  <div>
                    <span>--</span>
                    <span>+</span>
                  </div>
                </Styled.CouterButton>
              </div>
            </div>
          </div>

          <S.ItemDelete>
            <Icon.Trash />
          </S.ItemDelete>
        </S.CoffeeItem>

        <S.CoffeeItem>
          <div className='item__content'>
            <img
              className='item__img'
              src='/coffees/expresso-tradicional.png'
              alt='Expresso Tradicional'
            />

            <div className='item__wrapper'>
              <strong className='item__name'>Expresso Tradicional</strong>

              <div className='item__buy'>
                <strong>R$ 9,90</strong>

                <Styled.CouterButton>
                  <input type='number' defaultValue={1} min={1} readOnly />
                  <div>
                    <span>--</span>
                    <span>+</span>
                  </div>
                </Styled.CouterButton>
              </div>
            </div>
          </div>

          <S.ItemDelete>
            <Icon.Trash />
          </S.ItemDelete>
        </S.CoffeeItem>

        <S.CoffeeItem>
          <div className='item__content'>
            <img
              className='item__img'
              src='/coffees/expresso-tradicional.png'
              alt='Expresso Tradicional'
            />

            <div className='item__wrapper'>
              <strong className='item__name'>Expresso Tradicional</strong>

              <div className='item__buy'>
                <strong>R$ 9,90</strong>

                <Styled.CouterButton>
                  <input type='number' defaultValue={1} min={1} readOnly />
                  <div>
                    <span>--</span>
                    <span>+</span>
                  </div>
                </Styled.CouterButton>
              </div>
            </div>
          </div>

          <S.ItemDelete>
            <Icon.Trash />
          </S.ItemDelete>
        </S.CoffeeItem>
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
