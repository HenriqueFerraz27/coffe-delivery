import styled from 'styled-components'
import { pxToRem } from '../../../../utils/pxToRem'

export const Payment = styled.section`
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
  }
`

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(12)};
  margin-top: ${pxToRem(32)};

  button {
    gap: ${pxToRem(12)};
    padding: ${pxToRem(20)};
    min-width: ${pxToRem(200)};
    height: ${pxToRem(50)};
    color: ${({ theme }) => theme.color.basic.base.secondary};
    border-radius: ${pxToRem(7)};
    background-color: ${({ theme }) => theme.color.basic.support.tertiary};
    transition: all 0.1s;

    &:hover {
      background-color: ${({ theme }) => theme.color.basic.support.secondary};

      svg {
        color: ${({ theme }) => theme.color.brand.yellow.secondary};
      }
    }

    &:focus {
      background-color: ${({ theme }) => theme.color.basic.support.secondary};

      svg {
        color: ${({ theme }) => theme.color.brand.yellow.secondary};
      }
    }

    svg {
      min-width: ${pxToRem(16)};
      min-height: ${pxToRem(16)};
      transition: all 0.1s;
    }
  }

  @media (min-width: 768px) {
    display: flex;
  }

  @media (min-width: 1280px) {
    display: grid;
  }
`
