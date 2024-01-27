import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import { pxToRem } from '../../../../utils/pxToRem'

export const ModalCloseButton = styled(Dialog.Close)`
  position: absolute;
  top: ${pxToRem(16)};
  right: ${pxToRem(16)};

  svg {
    width: ${pxToRem(24)};
    height: ${pxToRem(24)};
    color: ${({ theme }) => theme.color.basic.base.tertiary};
  }
`

export const ModalOverlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100%;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`

export const ModalContainer = styled(Dialog.Content)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: 100dvh;
`

export const ModalContent = styled.div`
  position: relative;
  max-width: ${pxToRem(535)};
  margin: ${pxToRem(40)} 0;
  padding: ${pxToRem(40)} ${pxToRem(50)};
  border-radius: ${pxToRem(8)};
  background-color: ${({ theme }) => theme.color.basic.auxiliary.secondary};
  overflow-y: auto;

  h2 {
    font-size: ${({ theme }) => theme.typography.size.xl};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }
`

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(16)};
  margin-top: ${pxToRem(32)};

  @media (min-width: 576px) {
    display: grid;
    grid-template-areas:
      'a1 a2 a2 a3'
      'a4 a4 a5 a5'
      'a6 a6 a6 a7';
    grid-template-columns: ${pxToRem(100)} 2fr 2fr ${pxToRem(100)};
  }

  input {
    width: 100%;
    padding: ${pxToRem(12)};
    color: ${({ theme }) => theme.color.basic.base.secondary};
    border: none;
    border-radius: ${pxToRem(4)};
    background-color: ${({ theme }) => theme.color.basic.support.secondary};
    transition: all 0.1s;

    @media (min-width: 576px) {
      &:nth-child(1) {
        grid-area: a1;
        max-width: ${pxToRem(100)};
      }

      &:nth-child(2) {
        grid-area: a2;
      }

      &:nth-child(3) {
        grid-area: a3;
      }

      &:nth-child(4) {
        grid-area: a4;
      }

      &:nth-child(5) {
        grid-area: a5;
      }

      &:nth-child(6) {
        grid-area: a6;
      }

      &:nth-child(7) {
        grid-area: a7;
      }
    }
  }

  button[type='submit'] {
    margin-top: ${pxToRem(24)};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    transition: all 0.1s;
  }
`
