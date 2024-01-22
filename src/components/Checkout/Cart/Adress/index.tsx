import * as S from './styles'
import * as Icon from 'phosphor-react'

export const Adress = () => {
  return (
    <S.Adress>
      <S.AdressHeader>
        <Icon.MapPinLine />

        <div>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </S.AdressHeader>

      <S.AdressForm>
        <input type='text' placeholder='CEP' />
        <input type='text' placeholder='Rua' />
        <input type='text' placeholder='Número' />
        <input type='text' placeholder='Complemento' />
        <input type='text' placeholder='Bairro' />
        <input type='text' placeholder='Cidade' />
        <input type='text' placeholder='UF' />
      </S.AdressForm>
    </S.Adress>
  )
}
