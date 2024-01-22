import styled from 'styled-components'
import { pxToRem } from '../../utils/pxToRem'

export const Container = styled.div`
  max-width: ${pxToRem(1440)};
  width: 88%;
  margin: auto;

  @media (min-width: 576px) {
    width: ${pxToRem(540)};
  }

  @media (min-width: 672px) {
    width: ${pxToRem(630)};
  }

  @media (min-width: 768px) {
    width: ${pxToRem(720)};
  }

  @media (min-width: 896px) {
    width: ${pxToRem(840)};
  }

  @media (min-width: 1024px) {
    width: ${pxToRem(796)};
  }

  @media (min-width: 1280px) {
    width: ${pxToRem(996)};
  }

  @media (min-width: 1440px) {
    width: ${pxToRem(1120)};
  }

  @media (min-width: 1600px) {
    width: ${pxToRem(1440)};
  }
`
