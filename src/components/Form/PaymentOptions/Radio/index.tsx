import { InputHTMLAttributes, LegacyRef, ReactNode, forwardRef } from 'react'
import * as S from './styles'

interface PaymentRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode
  isChecked: boolean
}

export const PaymentRadio = forwardRef(function PaymentRadio(
  { children, isChecked, ...rest }: PaymentRadioProps,
  ref: LegacyRef<HTMLInputElement>
) {
  return (
    <S.PaymentRadio data-state={isChecked}>
      <input type='radio' ref={ref} {...rest} />
      {children}
    </S.PaymentRadio>
  )
})
