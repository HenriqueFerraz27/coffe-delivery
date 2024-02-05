import { SuccessInfos } from '../../components'
import * as S from './styles'

function Success() {
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
