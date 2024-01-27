import * as S from './styles'
import * as Icon from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import { Adress } from '../../..'

export const LocationModal = () => {
  return (
    <Dialog.Portal>
      <S.ModalOverlay />
      <S.ModalContainer>
        <S.ModalContent>
          <Dialog.Title>Endereço de Entrega</Dialog.Title>
          <Dialog.Description>
            Informe o endereço onde deseja receber seu pedido
          </Dialog.Description>

          <S.ModalForm>
            <Adress />
          </S.ModalForm>

          <S.ModalCloseButton>
            <Icon.X weight='bold' />
          </S.ModalCloseButton>
        </S.ModalContent>
      </S.ModalContainer>
    </Dialog.Portal>
  )
}
