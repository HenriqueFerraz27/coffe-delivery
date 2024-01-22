import styled from 'styled-components'
import { pxToRem } from '../../../../utils/pxToRem'

export const Adress = styled.section`
  padding: ${pxToRem(20)};
  border-radius: ${pxToRem(6)};
  background-color: ${({ theme }) => theme.color.basic.auxiliary.secondary};

  @media (min-width: 1440px) {
    padding: ${pxToRem(40)};
  }
`

export const AdressHeader = styled.header`
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
export const AdressForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(12)};
  margin-top: ${pxToRem(32)};

  @media (min-width: 425px) {
    display: grid;
    grid-template-areas:
      'a1 a2 a2 a3'
      'a4 a4 a5 a5'
      'a6 a6 a6 a7';
    grid-template-columns: ${pxToRem(100)} 2fr 2fr ${pxToRem(100)};
  }

  input {
    width: 100%;
    padding: ${pxToRem(12)};
    color: ${({ theme }) => theme.color.basic.base.secondary};
    border: none;
    border-radius: ${pxToRem(4)};
    background-color: ${({ theme }) => theme.color.basic.support.secondary};

    &:focus {
      outline: 2px solid ${({ theme }) => theme.color.brand.yellow.tertiary};
    }

    &::placeholder {
      color: ${({ theme }) => theme.color.basic.base.tertiary};
    }

    @media (min-width: 425px) {
      &:nth-child(1) {
        grid-area: a1;
        max-width: ${pxToRem(100)};
      }

      &:nth-child(2) {
        grid-area: a2;
      }

      &:nth-child(3) {
        grid-area: a3;
      }

      &:nth-child(4) {
        grid-area: a4;
      }

      &:nth-child(5) {
        grid-area: a5;
      }

      &:nth-child(6) {
        grid-area: a6;
      }

      &:nth-child(7) {
        grid-area: a7;
      }
    }
  }
`
