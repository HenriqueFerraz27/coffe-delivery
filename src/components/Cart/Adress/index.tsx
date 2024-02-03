import { AddressInputs } from '../..'
import * as S from './styles'
import * as Icon from '@phosphor-icons/react'

export const CartAddress = () => {
  return (
    <S.Address>
      <S.AddressHeader>
        <Icon.MapPinLine />

        <div>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </S.AddressHeader>

      <S.AddressForm>
        <AddressInputs />
      </S.AddressForm>
    </S.Address>
  )
}
