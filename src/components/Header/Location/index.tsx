import * as S from './styles'
import * as Icon from 'phosphor-react'
import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { LocationModal } from './Modal'

export const Location = () => {
  const [city, setCity] = useState<string>('')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser')
      return
    }

    navigator.geolocation.getCurrentPosition(
      async position => {
        const { latitude, longitude } = position.coords

        try {
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`
          )
          const data = await response.json()
          const cityName = data.results[0].address_components.find(
            (component: any) => component.types.includes('locality')
          ).long_name

          setCity(cityName)
        } catch (error) {
          setError('Insira sua localização...')
        }
      },
      err => {
        setError('Insira sua localização...')
      }
    )
  }, [])

  return (
    <Dialog.Root>
      <S.LocationTrigger>
        <Icon.MapPin weight='fill' />{' '}
        <span>
          {error && error}
          {city && city}
        </span>
      </S.LocationTrigger>

      <LocationModal />
    </Dialog.Root>
  )
}
