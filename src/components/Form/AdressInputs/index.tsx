import * as S from './styles'

export const AddressInputs = () => {
  return (
    <>
      <S.AddressInput>
        <input id='cep' type='text' placeholder='CEP*' min={9} minLength={9} />
      </S.AddressInput>

      <S.AddressInput>
        <input type='text' placeholder='Rua*' />
      </S.AddressInput>

      <S.AddressInput>
        <input type='number' placeholder='Número*' min={1} />
      </S.AddressInput>

      <S.AddressInput>
        <input type='text' placeholder='Complemento' />
      </S.AddressInput>

      <S.AddressInput>
        <input type='text' placeholder='Bairro*' />
      </S.AddressInput>

      <S.AddressInput>
        <input type='text' placeholder='Cidade*' />
      </S.AddressInput>

      <S.AddressInput>
        <input type='text' placeholder='UF*' maxLength={2} />
      </S.AddressInput>
    </>
  )
}
