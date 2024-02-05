import { useFormContext } from 'react-hook-form'
import { PaymentRadio } from '../../index'
import * as S from './styles'
import * as Icon from '@phosphor-icons/react'
import { NewOrderData } from '../../../schemas/newOrder'

export const PaymentOptions = () => {
  const { register, watch } = useFormContext<NewOrderData>()
  const selectedPaymentMethod = watch('paymentMethod')

  return (
    <S.PaymentOptions>
      <PaymentRadio
        isChecked={selectedPaymentMethod === 'credit'}
        value='credit'
        {...register('paymentMethod')}
      >
        <Icon.CreditCard /> Cartão de Crédito
      </PaymentRadio>

      <PaymentRadio
        isChecked={selectedPaymentMethod === 'debit'}
        value='debit'
        {...register('paymentMethod')}
      >
        <Icon.Bank /> Cartão de Débito
      </PaymentRadio>

      <PaymentRadio
        isChecked={selectedPaymentMethod === 'cash'}
        value='cash'
        {...register('paymentMethod')}
      >
        <Icon.Money /> Dinheiro
      </PaymentRadio>
    </S.PaymentOptions>
  )
}
