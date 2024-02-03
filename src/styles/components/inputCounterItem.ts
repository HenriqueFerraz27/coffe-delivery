import styled from 'styled-components'
import { pxToRem } from '../../utils/pxToRem'

export const InputCounterItem = styled.div`
  display: inline-block;
  position: relative;
  transition: all 0.1s;

  &:hover input {
    outline: 2px solid #996dff;
  }

  input {
    width: ${pxToRem(72)};
    height: ${pxToRem(38)};
    color: ${({ theme }) => theme.color.basic.base.primary};
    text-align: center;
    border: none;
    border-radius: ${pxToRem(6)};
    background-color: ${({ theme }) => theme.color.basic.support.tertiary};
    transition: all 0.1s;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
  }

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
      letter-spacing: -2px;
      cursor: pointer;
      transition: all 0.1s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`
