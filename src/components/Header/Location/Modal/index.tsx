import * as S from './styles'
import * as Icon from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { AddressInputs } from '../../../Form/AdressInputs'

export const LocationModal = () => {
  return (
    <Dialog.Portal>
      <S.ModalContainer>
        <S.ModalContent>
          <Dialog.Title>Endereço de Entrega</Dialog.Title>
          <Dialog.Description>
            Informe o endereço onde deseja receber seu pedido
          </Dialog.Description>

          <S.ModalForm>
            <AddressInputs />
          </S.ModalForm>

          <S.ModalCloseButton>
            <Icon.X weight='bold' />
          </S.ModalCloseButton>
        </S.ModalContent>
      </S.ModalContainer>
    </Dialog.Portal>
  )
}
