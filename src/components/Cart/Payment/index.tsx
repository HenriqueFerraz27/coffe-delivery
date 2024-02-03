import { useForm } from 'react-hook-form'
import * as S from './styles'
import * as Icon from '@phosphor-icons/react'
import { PaymentOptions } from '../..'

export const CartPayment = () => {
  const {
    formState: { errors },
  } = useForm()

  return (
    <S.CartPayment>
      <S.PaymentHeader>
        <Icon.CurrencyDollar />

        <div>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
            {errors.paymentMethod && (
              <span>{errors.paymentMethod?.message?.toString()}</span>
            )}
          </p>
        </div>
      </S.PaymentHeader>

      <PaymentOptions />
    </S.CartPayment>
  )
}
