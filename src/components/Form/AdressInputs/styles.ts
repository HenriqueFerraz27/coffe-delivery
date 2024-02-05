import styled from 'styled-components'
import { pxToRem } from '../../../utils/pxToRem'

export const AddressInput = styled.div`
  input {
    width: 100%;
    padding: ${pxToRem(12)};
    color: ${({ theme }) => theme.color.basic.base.secondary};
    border: none;
    border-radius: ${pxToRem(4)};
    background-color: ${({ theme }) => theme.color.basic.support.secondary};
    transition: all 0.1s;

    &#state {
      text-transform: uppercase;
    }

    &:hover {
      outline: 2px solid ${({ theme }) => theme.color.brand.yellow.secondary};
    }

    &:focus {
      outline: 2px solid ${({ theme }) => theme.color.brand.yellow.tertiary};
    }

    &::placeholder {
      color: ${({ theme }) => theme.color.basic.base.tertiary};
    }
  }

  span {
    color: ${({ theme }) => theme.color.brand.yellow.tertiary};
    font-size: ${({ theme }) => theme.typography.size['xs']};
  }
`
