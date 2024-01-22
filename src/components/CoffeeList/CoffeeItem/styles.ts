import styled from 'styled-components'
import { pxToRem } from '../../../utils/pxToRem'

export const CoffeeItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(32)};
  min-width: ${pxToRem(260)};
  padding: ${pxToRem(24)};
  border-top-left-radius: ${pxToRem(8)};
  border-bottom-right-radius: ${pxToRem(8)};
  border-top-right-radius: ${pxToRem(40)};
  border-bottom-left-radius: ${pxToRem(40)};
  background-color: ${({ theme }) => theme.color.basic.auxiliary.secondary};
`

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${pxToRem(16)};
`

export const ItemHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(12)};

  img {
    width: ${pxToRem(120)};
    height: ${pxToRem(120)};
    margin-top: calc(-1.875rem + -1.5rem);
  }

  span {
    display: flex;
    align-items: center;
    height: ${pxToRem(20)};
    padding: 0 ${pxToRem(8)};
    color: ${({ theme }) => theme.color.brand.yellow.tertiary};
    font-size: ${({ theme }) => theme.typography.size['2xs']};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    text-transform: uppercase;
    border-radius: ${pxToRem(100)};
    background-color: ${({ theme }) => theme.color.brand.yellow.primary};
  }
`

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${pxToRem(32)};
  width: 100%;
`

export const ItemContent = styled.div`
  display: inline-block;
  max-width: ${pxToRem(220)};
  text-align: center;

  strong {
    color: ${({ theme }) => theme.color.basic.base.primary};
    font-family: ${({ theme }) => theme.typography.family.baloo2};
    font-size: ${({ theme }) => theme.typography.size['xl']};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    line-height: ${({ theme }) => theme.typography.lineHeight.base};
  }

  p {
    margin-top: ${pxToRem(8)};
    font-size: ${({ theme }) => theme.typography.size.sm};
    line-height: ${({ theme }) => theme.typography.lineHeight.base};
  }
`

export const ItemBuy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    color: ${({ theme }) => theme.color.basic.base.primary};
    font-family: ${({ theme }) => theme.typography.family.baloo2};
    font-size: ${({ theme }) => theme.typography.size['2xl']};
    font-weight: ${({ theme }) => theme.typography.weight.extraBold};
    line-height: ${({ theme }) => theme.typography.lineHeight.base};
  }

  div {
    display: flex;
    gap: ${pxToRem(8)};

    .item-buy__counter {
      position: relative;

      div {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 0 ${pxToRem(8)};

        span {
          color: ${({ theme }) => theme.color.brand.purple.secondary};
          font-size: ${({ theme }) => theme.typography.size['2xl']};
          line-height: 0;
          letter-spacing: -1px;
          cursor: pointer;
        }
      }
    }

    button {
      width: ${pxToRem(38)};
      height: ${pxToRem(38)};
      border-radius: ${pxToRem(6)};
      background-color: ${({ theme }) => theme.color.brand.purple.tertiary};

      svg {
        width: ${pxToRem(22)};
        height: ${pxToRem(22)};
        color: ${({ theme }) => theme.color.basic.auxiliary.secondary};
      }
    }
  }
`
