import styled from 'styled-components'
import { pxToRem } from '../../../utils/pxToRem'

export const CartPayment = styled.section`
  padding: ${pxToRem(20)};
  border-radius: ${pxToRem(6)};
  background-color: ${({ theme }) => theme.color.basic.auxiliary.secondary};

  svg {
    color: ${({ theme }) => theme.color.brand.purple.secondary};
  }

  @media (min-width: 1440px) {
    padding: ${pxToRem(40)};
  }
`

export const PaymentHeader = styled.header`
  display: flex;
  gap: ${pxToRem(8)};

  svg {
    min-width: ${pxToRem(22)};
    min-height: ${pxToRem(22)};
  }

  h3,
  p {
    line-height: ${({ theme }) => theme.typography.lineHeight.base};
  }

  p {
    font-size: ${({ theme }) => theme.typography.size.sm};

    span {
      display: block;
      color: ${({ theme }) => theme.color.brand.yellow.tertiary};
      font-size: ${({ theme }) => theme.typography.size['xs']};
    }
  }
`
