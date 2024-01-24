import styled from 'styled-components'
import { pxToRem } from '../../../../utils/pxToRem'

export const Coffees = styled.section`
  position: relative;
  margin-top: ${pxToRem(16)};
  padding: ${pxToRem(24)};
  border-top-left-radius: ${pxToRem(6)};
  border-bottom-right-radius: ${pxToRem(6)};
  border-top-right-radius: ${pxToRem(40)};
  border-bottom-left-radius: ${pxToRem(40)};
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.basic.auxiliary.secondary};

  @media (min-width: 672px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${pxToRem(24)};
  }

  @media (min-width: 1024px) {
    display: block;
  }

  @media (min-width: 1440px) {
    padding: ${pxToRem(40)};
  }
`

export const CoffeesList = styled.ul`
  display: grid;

  @media (min-width: 432px) {
    grid-template-columns: 1fr 1fr;
    gap: ${pxToRem(24)};
  }

  @media (min-width: 672px) {
    display: block;
  }
`

export const CoffeesTotal = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(12)};
  padding: ${pxToRem(24)} 0;
  border-top: 1px solid ${({ theme }) => theme.color.basic.support.tertiary};

  div {
    display: flex;
    justify-content: space-between;

    strong {
      font-size: ${({ theme }) => theme.typography.size.xl};
    }
  }

  @media (min-width: 672px) {
    border-top: none;
    padding-top: initial;
  }

  @media (min-width: 1024px) {
    padding: ${pxToRem(24)} 0;
    border-top: 1px solid ${({ theme }) => theme.color.basic.support.tertiary};
  }
`

export const ConfirmButton = styled.button`
  height: ${pxToRem(46)};
  width: 100%;
  color: ${({ theme }) => theme.color.basic.auxiliary.secondary};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  border-radius: ${pxToRem(6)};
  background-color: ${({ theme }) => theme.color.brand.yellow.secondary};
  transition: all 0.1s;

  &:hover {
    background-color: ${({ theme }) => theme.color.brand.yellow.tertiary};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.color.brand.yellow.secondary};
  }
`
