import styled from 'styled-components'
import { pxToRem } from '../../utils/pxToRem'

export const Container = styled.div`
  max-width: ${pxToRem(1440)};
  width: 88%;
  margin: auto;

  @media (min-width: 768px) {
    width: 78%;
  }
`
