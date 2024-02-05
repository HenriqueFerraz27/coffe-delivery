import { NavLink } from 'react-router-dom'
import * as S from './styles'
import logoCoffeeDeliveryHorizontal from '/logos/coffee-delivery-horizontal.svg'
import * as Icon from '@phosphor-icons/react'
import { Location } from '..'
import { useCart } from '../../hooks/useCart'

export const Header = () => {
  const { cart } = useCart()

  return (
    <S.Header>
      <h2>
        <NavLink to='/' title='Coffe Delivery'>
          <img
            src={logoCoffeeDeliveryHorizontal}
            alt='Coffee Delivery - Logo'
          />
        </NavLink>
      </h2>

      <nav>
        <ul>
          <li>
            <Location />
          </li>
          <S.Cart>
            <NavLink to='/cart' title='Cart'>
              <Icon.ShoppingCart weight='fill' />
              {cart.length >= 1 && (
                <span>
                  <strong>{cart.length}</strong>
                </span>
              )}
            </NavLink>
          </S.Cart>
        </ul>
      </nav>
    </S.Header>
  )
}
