import styled from 'styled-components'
import { Container } from '../../styles/components'
import { pxToRem } from '../../utils/pxToRem'

export const Sucess = styled(Container).attrs({ as: 'section' })`
  display: grid;
  gap: ${pxToRem(60)};
  margin: ${pxToRem(40)} auto;

  .sucess__container {
    display: grid;
    align-items: center;
    gap: ${pxToRem(60)};
  }

  .sucess__img img {
    width: 100%;
  }

  .sucess__infos {
    &__01 {
      margin-top: ${pxToRem(40)};
    }

    &__02 {
      display: none;
    }
  }

  @media (min-width: 576px) {
    .sucess {
      &__container {
        grid-template-columns: 1fr 1fr;
      }

      &__img {
       order: 1;
      }

      &__infos {
        &__01 {
          display: none;
        }

        &__02 {
          display: block;
        }
      }
    }
  }

  @media (min-width: 896px) {
    .sucess__infos {
      &__01 {
        display: block;
      }

      &__02 {
        display: none;
      }
    }
  }

  h2 {
    color: ${({ theme }) => theme.color.basic.base.primary};
    font-family: ${({ theme }) => theme.typography.family.baloo2};
    font-size: ${({ theme }) => theme.typography.size['3xl']};
    font-weight: ${({ theme }) => theme.typography.weight.extraBold};
    line-height: ${({ theme }) => theme.typography.lineHeight.base};
  }

  @media (min-width: 768px) {
    margin: ${pxToRem(60)} auto;
  }
`

export const SucessHeader = styled.header`
  text-align: center;

  h2 {
    color: ${({ theme }) => theme.color.brand.yellow.tertiary};
    font-family: ${({ theme }) => theme.typography.family.baloo2};
    font-size: ${({ theme }) => theme.typography.size['3xl']};
    font-weight: ${({ theme }) => theme.typography.weight.extraBold};
    line-height: ${({ theme }) => theme.typography.lineHeight.base};
  }

  p {
    font-size: ${({ theme }) => theme.typography.size['xl']};
    line-height: ${({ theme }) => theme.typography.lineHeight.base};
  }
`
