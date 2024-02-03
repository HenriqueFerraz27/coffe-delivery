import styled from 'styled-components'
import { pxToRem } from '../../../utils/pxToRem'

export const Address = styled.section`
  padding: ${pxToRem(20)};
  border-radius: ${pxToRem(6)};
  background-color: ${({ theme }) => theme.color.basic.auxiliary.secondary};

  @media (min-width: 1440px) {
    padding: ${pxToRem(40)};
  }
`

export const AddressHeader = styled.header`
  display: flex;
  gap: ${pxToRem(8)};

  svg {
    min-width: ${pxToRem(22)};
    min-height: ${pxToRem(22)};
    color: ${({ theme }) => theme.color.brand.yellow.tertiary};
  }

  h3,
  p {
    line-height: ${({ theme }) => theme.typography.lineHeight.base};
  }

  p {
    font-size: ${({ theme }) => theme.typography.size.sm};
  }
`
export const AddressForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(12)};
  margin-top: ${pxToRem(32)};

  @media (min-width: 432px) {
    display: grid;
    grid-template-areas:
      'cep street street number'
      'complement complement neighborhood neighborhood'
      'city city city state';
    grid-template-columns: ${pxToRem(100)} 2fr 2fr ${pxToRem(100)};
  }

  div {
    @media (min-width: 432px) {
      &:nth-child(1) {
        grid-area: cep;
        max-width: ${pxToRem(100)};
      }

      &:nth-child(2) {
        grid-area: street;
      }

      &:nth-child(3) {
        grid-area: number;
      }

      &:nth-child(4) {
        grid-area: complement;
      }

      &:nth-child(5) {
        grid-area: neighborhood;
      }

      &:nth-child(6) {
        grid-area: city;
      }

      &:nth-child(7) {
        grid-area: state;
      }
    }
  }
`
