import styled from 'styled-components'
import { pxToRem } from '../../../utils/pxToRem'

export const CoffeeItem = styled.li`
  padding: ${pxToRem(24)};
  padding-top: initial;
  border-top-left-radius: ${pxToRem(8)};
  border-bottom-right-radius: ${pxToRem(8)};
  border-top-right-radius: ${pxToRem(40)};
  border-bottom-left-radius: ${pxToRem(40)};
  background-color: ${({ theme }) => theme.color.basic.auxiliary.secondary};
`
