import { useFormContext } from 'react-hook-form'
import * as S from './styles'
import { NewOrderData } from '../../../schemas/newOrder'
import ReactInputMask from 'react-input-mask'
import { useEffect } from 'react'

export const AddressInputs = () => {
  const {
    register,
    watch,
    setValue,
    setFocus,
    setError,
    formState: { errors },
  } = useFormContext<NewOrderData>()

  const address = watch()

  useEffect(() => {
    localStorage.setItem(
      '@coffee-delivery:address-1.0.0',
      JSON.stringify(address)
    )
  }, [address])

  const handleAddressBlur = () => {
    const cepFormat = watch('cep').replace(/[^0-9]/g, '')

    if (cepFormat.length !== 8) {
      setError('cep', {
        type: 'invalid_value',
        message: 'Informe um CEP válido',
      })
      return
    }

    fetch(`https://viacep.com.br/ws/${cepFormat}/json/`)
      .then(response => response.json())
      .then(data => {
        const { logradouro, bairro, localidade, uf } = data

        setValue('street', logradouro)
        setValue('neighborhood', bairro)
        setValue('city', localidade)
        setValue('state', uf)
        setFocus('number')
      })
  }

  return (
    <>
      <S.AddressInput>
        <ReactInputMask
          type='text'
          placeholder='CEP*'
          mask='99999-999'
          {...register('cep')}
          onBlur={handleAddressBlur}
        />
        {errors.cep && <span>{errors.cep.message}</span>}
      </S.AddressInput>

      <S.AddressInput>
        <input type='text' placeholder='Rua*' {...register('street')} />
        {errors.street && <span>{errors.street.message}</span>}
      </S.AddressInput>

      <S.AddressInput>
        <input
          type='number'
          placeholder='Número*'
          min={1}
          {...register('number', { valueAsNumber: true })}
        />
        {errors.number && <span>{errors.number.message}</span>}
      </S.AddressInput>

      <S.AddressInput>
        <input
          type='text'
          placeholder='Complemento'
          {...register('complement')}
        />
        {errors.complement && <span>{errors.complement.message}</span>}
      </S.AddressInput>

      <S.AddressInput>
        <input
          type='text'
          placeholder='Bairro*'
          {...register('neighborhood')}
        />
        {errors.neighborhood && <span>{errors.neighborhood.message}</span>}
      </S.AddressInput>

      <S.AddressInput>
        <input type='text' placeholder='Cidade*' {...register('city')} />
        {errors.city && <span>{errors.city.message}</span>}
      </S.AddressInput>

      <S.AddressInput>
        <input
          id='state'
          type='text'
          placeholder='UF*'
          maxLength={2}
          {...register('state')}
        />
        {errors.state && <span>{errors.state.message}</span>}
      </S.AddressInput>
    </>
  )
}
