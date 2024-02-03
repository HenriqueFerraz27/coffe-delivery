import styled from 'styled-components'
import { Container } from '../../styles/components'
import { pxToRem } from '../../utils/pxToRem'

export const CartMain = styled(Container).attrs({ as: 'main' })`
  display: grid;
  gap: ${pxToRem(32)};
  margin: ${pxToRem(40)} auto;

  @media (min-width: 1024px) {
    grid-template-columns: 1.5fr 1fr;
    margin: ${pxToRem(60)} auto;
  }

  @media (min-width: 1280px) {
    grid-template-columns: 2fr 1fr;
  }
`

export const CartArticle = styled.article`
  h2 {
    margin-bottom: ${pxToRem(16)};
    color: ${({ theme }) => theme.color.basic.base.primary};
    font-family: ${({ theme }) => theme.typography.family.baloo2};
    font-size: ${({ theme }) => theme.typography.size.lg};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    line-height: ${({ theme }) => theme.typography.lineHeight.base};
  }

  .container {
    display: grid;
    gap: ${pxToRem(16)};
  }

  @media (min-width: 768px) {
    .container {
      grid-template-columns: 2fr 1fr;
    }
  }

  @media (min-width: 1024px) {
    .container {
      grid-template-columns: 1fr;
      gap: ${pxToRem(32)};
    }
  }
`

export const CartEmpety = styled.div`
  padding: ${pxToRem(24)};

  div {
    margin-bottom: ${pxToRem(40)};
    text-align: center;
    opacity: 0.75;

    svg {
      min-width: ${pxToRem(180)};
      min-height: ${pxToRem(180)};
      margin: auto;
    }

    strong {
      display: block;
      font-size: ${({ theme }) => theme.typography.size.xl};
    }
  }

  a {
    height: ${pxToRem(46)};
    margin-top: ${pxToRem(24)};
    color: ${({ theme }) => theme.color.basic.base.primary};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    border-radius: ${pxToRem(6)};
    background-color: ${({ theme }) => theme.color.brand.purple.secondary};
    transition: all 0.1s;

    &:hover {
      background-color: ${({ theme }) => theme.color.brand.purple.tertiary};
    }
  }
`
