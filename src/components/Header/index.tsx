import { NavLink } from 'react-router-dom'
import * as S from './styles'
import logoCoffeDeliveryHorizontal from '/logos/coffe-delivery-horizontal.svg'
import * as Icon from 'phosphor-react'

export const Header = () => {
  return (
    <S.Header>
      <h1>
        <NavLink to='/' title='Coffe Delivery'>
          <img src={logoCoffeDeliveryHorizontal} alt='Coffe Delivery - Logo' />
        </NavLink>
      </h1>

      <nav>
        <ul>
          <S.Location>
            <Icon.MapPin weight='fill' />
            <input type='text' placeholder='Insira sua localização...' />
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
