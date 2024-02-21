import { HTMLAttributes } from 'react'
import * as S from './styles'
import * as Icon from '@phosphor-icons/react'
import { useCart } from '../../hooks/useCart'
import { useParams } from 'react-router-dom'

interface SuccessInfosProps extends HTMLAttributes<HTMLDivElement> {}

export const SuccessInfos = ({ ...rest }: SuccessInfosProps) => {
  const { orders } = useCart()
  const { orderId } = useParams()
  const orderInfo = orders.find(order => order.id === Number(orderId))
  const paymentMethod = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    cash: 'Dinheiro',
  }

  if (!orderInfo?.id) {
    return null
  }

  return (
    <S.SuccessInfos {...rest}>
      <ul>
        <li>
          <span>
            <Icon.MapPin weight='fill' />
          </span>
          <div>
            <p>
              Entrega em{' '}
              <strong>
                {orderInfo.street}, {orderInfo.number}
              </strong>
            </p>
            <p>
              {orderInfo.neighborhood} - {orderInfo.city}, {orderInfo.state}
            </p>
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
            <strong>{paymentMethod[orderInfo.paymentMethod]}</strong>
          </div>
        </li>
      </ul>
    </S.SuccessInfos>
  )
}
