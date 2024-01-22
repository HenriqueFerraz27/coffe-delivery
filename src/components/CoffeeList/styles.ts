import styled from 'styled-components'
import { Container } from '../../styles/components'
import { pxToRem } from '../../utils/pxToRem'

export const CoffeeListArticle = styled(Container).attrs({ as: 'article' })`
  padding: ${pxToRem(32)} 0;

  h2 {
    color: ${({ theme }) => theme.color.basic.base.primary};
    font-family: ${({ theme }) => theme.typography.family.baloo2};
    font-size: ${({ theme }) => theme.typography.size['3xl']};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    line-height: ${({ theme }) => theme.typography.lineHeight.base};
  }
`

export const CoffeeList = styled.ul`
  display: grid;
  justify-content: center;
  gap: ${pxToRem(48)} ${pxToRem(32)};
  margin-top: ${pxToRem(60)};

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
