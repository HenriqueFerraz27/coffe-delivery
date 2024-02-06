import { Navigate, useParams } from 'react-router-dom'
import { SuccessInfos } from '../../components'
import * as S from './styles'
import { Order } from '../../reducers/cart/reducer'

function Success() {
  const storedCartStateAsJSON = localStorage.getItem(
    '@coffee-delivery:cart-state-1.0.0'
  )

  const { orders } = storedCartStateAsJSON
    ? JSON.parse(storedCartStateAsJSON)
    : { orders: [] }

  const { orderId } = useParams<{ orderId: string }>()

  const isValidOrderId = orders.some(
    (order: Order) => order.id.toString() === orderId
  )

  if (!isValidOrderId) {
    return <Navigate to='/' />
  }

  return (
    <S.Success>
      <div className='sucess__container'>
        <div className='sucess__img'>
          <img
            src='/illustration-sucess.png'
            alt='Sucess - Delivery Illustration'
          />
        </div>

        <div>
          <S.SuccessHeader>
            <h2>Uhu! Pedido confirmado</h2>
            <p>Agora é só aguardar que logo o café chegará até você</p>
          </S.SuccessHeader>

          <SuccessInfos className='sucess__infos__01' />
        </div>
      </div>

      <SuccessInfos className='sucess__infos__02' />
    </S.Success>
  )
}

export default Success
