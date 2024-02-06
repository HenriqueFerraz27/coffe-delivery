import * as S from './styles'
import * as Icon from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { LocationModal } from './Modal'
import { useFormContext } from 'react-hook-form'
import { NewOrderData } from '../../../schemas/newOrder'
import { useLocation } from 'react-router-dom'

export const Location = () => {
  const urlIsCart = useLocation().pathname === '/cart'
  const { watch } = useFormContext<NewOrderData>()

  const city = watch('city')
  const state = watch('state')

  const locationIsEmpty =
    city && state ? `${city}, ${state}` : 'Insira sua localização...'

  if (urlIsCart) {
    return (
      <S.Location>
        <Icon.MapPin weight='fill' /> {locationIsEmpty}
      </S.Location>
    )
  }
  
  return (
    <Dialog.Root>
      <S.LocationTrigger>
        <Icon.MapPin weight='fill' /> {locationIsEmpty}
      </S.LocationTrigger>

      <LocationModal />
    </Dialog.Root>
  )
}
