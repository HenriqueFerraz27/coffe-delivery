import * as S from './styles'
import * as Icon from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { LocationModal } from './Modal'

export const Location = () => {
  return (
    <Dialog.Root>
      <S.LocationTrigger>
        <Icon.MapPin weight='fill' />{' '}
        Insira sua localização...
      </S.LocationTrigger>

      <LocationModal />
    </Dialog.Root>
  )
}
