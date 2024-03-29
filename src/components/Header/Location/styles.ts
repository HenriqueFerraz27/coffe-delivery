import styled from 'styled-components'
import { pxToRem } from '../../../utils/pxToRem'
import * as Dialog from '@radix-ui/react-dialog'

export const LocationBase = styled.div`
  display: flex;
  align-items: center;
  gap: ${pxToRem(4)};
  height: 100%;
  padding: 0 ${pxToRem(8)};
  color: ${({ theme }) => theme.color.brand.purple.tertiary};
  font-size: ${({ theme }) => theme.typography.size.sm};
  border-radius: ${pxToRem(6)};
  background-color: ${({ theme }) => theme.color.brand.purple.primary};
  transition: all 0.1s;

  &:hover {
    transform: scale(1.05);
  }

  svg {
    color: ${({ theme }) => theme.color.brand.purple.secondary};
  }

  span {
    display: none;
  }

  @media (min-width: 576px) {
    span {
      display: initial;
    }
  }
`

export const Location = styled(LocationBase)``

export const LocationTrigger = styled(LocationBase).attrs({
  as: Dialog.Trigger,
})``
