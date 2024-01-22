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

export const CoffeeItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${pxToRem(12)};
  position: relative;
  padding: ${pxToRem(24)} 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.basic.support.tertiary};

  &:first-child {
    padding-top: initial;
  }

  &:last-child {
    border-bottom: none;
  }

  .item__img {
    width: ${pxToRem(64)};
    height: ${pxToRem(64)};
  }

  .item__content {
    display: flex;
    align-items: center;
    gap: ${pxToRem(12)};

    .item__wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: ${pxToRem(12)};

      .item__buy {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: ${pxToRem(8)};

        input,
        button {
          height: ${pxToRem(32)};
          font-size: ${({ theme }) => theme.typography.size.xs};
        }
      }
    }
  }

  @media (min-width: 432px) {
    width: 100%;
    padding-top: initial;

    &:nth-last-child(2):not(&:nth-last-child(2)) {
      border-bottom: none;
    }

    .item__content {
      flex-direction: column;
      text-align: center;
      width: 100%;
    }
  }

  @media (min-width: 672px) {
    padding: ${pxToRem(24)} 0;

    &:nth-last-child(2) {
      border-bottom: 1px solid
        ${({ theme }) => theme.color.basic.support.tertiary};
    }

    .item__content {
      flex-direction: row;
      text-align: left;
    }
  }
`

export const ItemDelete = styled.button`
  align-self: flex-start;
  gap: ${pxToRem(4)};
  height: ${pxToRem(32)};
  padding: 0 ${pxToRem(8)};
  color: ${({ theme }) => theme.color.basic.base.primary};
  text-transform: uppercase;
  border-radius: ${pxToRem(6)};
  background-color: ${({ theme }) => theme.color.basic.support.tertiary};
  transition: all 0.1s;

  &:hover {
    background-color: ${({ theme }) => theme.color.basic.support.secondary};

    svg {
      color: ${({ theme }) => theme.color.brand.yellow.secondary};
    }
  }

  svg {
    width: ${pxToRem(16)};
    height: ${pxToRem(16)};
    color: ${({ theme }) => theme.color.brand.purple.secondary};
    transition: all 0.1s;
  }

  @media (min-width: 432px) {
    position: absolute;
    top: 0;
    right: 0;
  }

  @media (min-width: 672px) {
    position: initial;
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
