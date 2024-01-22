import { NavLink } from 'react-router-dom'
import * as S from './styles'
import logoCoffeeDeliveryHorizontal from '/logos/coffee-delivery-horizontal.svg'
import * as Icon from 'phosphor-react'

export const Header = () => {
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
          <S.Location>
            <button>
              <Icon.MapPin weight='fill' /> <span>Santo André, SP</span>
            </button>
          </S.Location>
          <S.Cart>
            <NavLink to='/checkout' title='Cart'>
              <Icon.ShoppingCart weight='fill' />
            </NavLink>
          </S.Cart>
        </ul>
      </nav>
    </S.Header>
  )
}
