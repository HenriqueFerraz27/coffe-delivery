import { NavLink } from 'react-router-dom'
import * as S from './styles'
import logoCoffeeDeliveryHorizontal from '/logos/coffee-delivery-horizontal.svg'
import * as Icon from 'phosphor-react'
import { useCartItems } from '../../hooks/useCartItems'
import { Location } from '..'

export const Header = () => {
  const { cartItems } = useCartItems()

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
            <NavLink to='/checkout' title='Cart'>
              <Icon.ShoppingCart weight='fill' />
              {cartItems.length >= 1 && (
                <span>
                  <strong>{cartItems.length}</strong>
                </span>
              )}
            </NavLink>
          </S.Cart>
        </ul>
      </nav>
    </S.Header>
  )
}
