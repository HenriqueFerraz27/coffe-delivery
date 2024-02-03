import styled from 'styled-components'
import { pxToRem } from '../../../../utils/pxToRem'

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
        align-items: center;
        justify-content: space-between;
        gap: ${pxToRem(8)};
        width: ${pxToRem(150)};

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
