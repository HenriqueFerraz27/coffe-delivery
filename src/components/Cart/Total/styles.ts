import styled from 'styled-components'
import { pxToRem } from '../../../utils/pxToRem'

export const CartTotal = styled.section`
  border-top-left-radius: ${pxToRem(6)};
  border-bottom-right-radius: ${pxToRem(6)};
  border-top-right-radius: ${pxToRem(40)};
  border-bottom-left-radius: ${pxToRem(40)};
  background-color: ${({ theme }) => theme.color.basic.auxiliary.secondary};
`

export const Coffees = styled.div`
  position: relative;
  padding: ${pxToRem(24)};

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
  margin-bottom: ${pxToRem(24)};
  border-bottom: 1px solid ${({ theme }) => theme.color.basic.support.tertiary};

  @media (min-width: 432px) {
    grid-template-columns: 1fr 1fr;
    gap: ${pxToRem(24)};
  }

  @media (min-width: 672px) {
    display: block;
    margin-bottom: initial;
    border: none;
  }

  @media (min-width: 1024px) {
    margin-bottom: ${pxToRem(24)};
    border-bottom: 1px solid
      ${({ theme }) => theme.color.basic.support.tertiary};
  }
`

export const CoffeesTotal = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(12)};

  div {
    display: flex;
    justify-content: space-between;

    strong {
      font-size: ${({ theme }) => theme.typography.size.xl};
    }
  }
`

export const ConfirmOrderButton = styled.button`
  height: ${pxToRem(46)};
  width: 100%;
  margin-top: ${pxToRem(24)};
  color: ${({ theme }) => theme.color.basic.auxiliary.secondary};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  border-radius: ${pxToRem(6)};
  background-color: ${({ theme }) => theme.color.brand.yellow.secondary};
  transition: all 0.1s;

  &:hover:not(&.confirm-button--disable) {
    background-color: ${({ theme }) => theme.color.brand.yellow.tertiary};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.color.brand.yellow.secondary};
  }

  &.confirm-button--disable {
    opacity: 0.75;
    cursor: not-allowed;
  }
`
