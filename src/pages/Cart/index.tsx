import * as S from './styles'
import { CartAddress, CartPayment, CartTotal } from '../../components'
import { useCart } from '../../hooks/useCart'
import * as Icon from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

function Cart() {
  const { cart } = useCart()

  return (
    <S.CartMain>
      <S.CartArticle>
        <h2>Complete seu pedido</h2>

        <div className='container'>
          <CartAddress />
          <CartPayment />
        </div>
      </S.CartArticle>

      <S.CartArticle>
        <h2>Cafés selecionados</h2>

        {cart.length >= 1 && <CartTotal />}

        {cart.length < 1 && (
          <S.CartEmpety>
            <div>
              <Icon.ShoppingCart weight='fill' />
              <strong>Carrinho vazio? Continue explorando</strong>
            </div>

            <NavLink to='/' title='Home'>
              Continuar Explorando
            </NavLink>
          </S.CartEmpety>
        )}
      </S.CartArticle>
    </S.CartMain>
  )
}

export default Cart
