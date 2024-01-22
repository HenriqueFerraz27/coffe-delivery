import * as S from './styles'

export const Cart = () => {
  return (
    <S.CartMain>
      <S.CartArticle>
        <h2>Complete seu pedido</h2>

        <div className='container'>
          {/* <Adress />
          <Payment /> */}
        </div>
      </S.CartArticle>

      <S.CartArticle>
        <h2>Cafés selecionados</h2>

        {/* <Coffees /> */}
      </S.CartArticle>
    </S.CartMain>
  )
}
