import { HTMLAttributes } from 'react'
import * as S from './styles'
import * as Icon from '@phosphor-icons/react'

interface SucessInfosProps extends HTMLAttributes<HTMLDivElement> {}

export const SucessInfos = ({ ...rest }: SucessInfosProps) => {
  return (
    <S.SucessInfos {...rest}>
      <ul>
        <li>
          <span>
            <Icon.MapPin weight='fill' />
          </span>
          <div>
            <p>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
            </p>
            <p>Farrapos - Porto Alegre, RS</p>
          </div>
        </li>

        <li>
          <span>
            <Icon.Timer weight='fill' />
          </span>
          <div>
            <p>Previsão de entrega</p>
            <strong>20 min - 30 min </strong>
          </div>
        </li>

        <li>
          <span>
            <Icon.CurrencyDollar weight='bold' />
          </span>
          <div>
            <p>Pagamento na entrega</p>
            <strong>Cartão de Crédito</strong>
          </div>
        </li>
      </ul>
    </S.SucessInfos>
  )
}
