import styled from 'styled-components'
import { pxToRem } from '../../utils/pxToRem'

export const SucessInfos = styled.div`
  padding: 1px;
  border-top-left-radius: ${pxToRem(8)};
  border-bottom-right-radius: ${pxToRem(8)};
  border-top-right-radius: ${pxToRem(40)};
  border-bottom-left-radius: ${pxToRem(40)};

  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.color.brand.yellow.secondary},
    ${({ theme }) => theme.color.brand.purple.secondary}
  );

  ul {
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(32)};
    padding: ${pxToRem(40)};
    border-top-left-radius: ${pxToRem(8)};
    border-bottom-right-radius: ${pxToRem(8)};
    border-top-right-radius: ${pxToRem(40)};
    border-bottom-left-radius: ${pxToRem(40)};
    background-color: ${({ theme }) => theme.color.basic.auxiliary.tertiary};

    li {
      display: flex;
      align-items: center;
      gap: ${pxToRem(12)};

      &:nth-child(odd) span {
        background-color: ${({ theme }) => theme.color.brand.yellow.secondary};
      }

      &:nth-child(even) span {
        background-color: ${({ theme }) => theme.color.brand.purple.secondary};
      }

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: ${pxToRem(32)};
        min-height: ${pxToRem(32)};
        border-radius: 100%;

        svg {
          min-width: ${pxToRem(16)};
          min-height: ${pxToRem(16)};
          color: ${({ theme }) => theme.color.basic.auxiliary.tertiary};
        }
      }

      p,
      strong {
        line-height: ${({ theme }) => theme.typography.lineHeight.base};
      }
    }
  }
`
