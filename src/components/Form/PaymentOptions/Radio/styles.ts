import styled from 'styled-components'
import { pxToRem } from '../../../../utils/pxToRem'

export const PaymentRadio = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(12)};
  position: relative;
  padding: ${pxToRem(20)};
  min-width: ${pxToRem(200)};
  height: ${pxToRem(50)};
  color: ${({ theme }) => theme.color.basic.base.secondary};
  border-radius: ${pxToRem(7)};
  background-color: ${({ theme }) => theme.color.basic.support.tertiary};
  transition: all 0.1s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.basic.support.secondary};
  }

  &[data-state='true'] {
    background-color: ${({ theme }) => theme.color.brand.purple.secondary};

    svg {
      color: ${({ theme }) => theme.color.basic.base.primary};
    }
  }

  input {
    display: none;
  }

  svg {
    min-width: ${pxToRem(16)};
    min-height: ${pxToRem(16)};
    transition: all 0.1s;
    color: ${({ theme }) => theme.color.brand.purple.secondary};
  }
`
