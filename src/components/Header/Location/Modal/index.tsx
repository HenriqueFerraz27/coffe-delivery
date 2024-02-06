import * as S from './styles'
import * as Icon from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { AddressInputs } from '../../../Form/AdressInputs'

export const LocationModal = () => {
  return (
    <Dialog.Portal>
      <S.ModalContainer>
        <S.ModalContent>
          <S.ModalHeader>
            <Icon.MapPinLine />

            <div>
              <Dialog.Title>Endereço de Entrega</Dialog.Title>
              <Dialog.Description>
                Informe o endereço onde deseja receber seu pedido
              </Dialog.Description>
            </div>
          </S.ModalHeader>

          <S.ModalForm>
            <AddressInputs />
          </S.ModalForm>

          <S.ModalCloseButton>
            <Icon.X weight='bold' />
          </S.ModalCloseButton>

          <S.ModalSaveButton>Salvar</S.ModalSaveButton>
        </S.ModalContent>
      </S.ModalContainer>
    </Dialog.Portal>
  )
}
