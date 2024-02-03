import styled from 'styled-components'
import { pxToRem } from '../../../utils/pxToRem'

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(12)};
  margin-top: ${pxToRem(32)};

  @media (min-width: 768px) {
    display: flex;
  }

  @media (min-width: 1280px) {
    display: grid;
  }
`
