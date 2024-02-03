import { SucessInfos } from '../../components'
import * as S from './styles'

function Sucess() {
  return (
    <S.Sucess>
      <div className='sucess__container'>
        <div className='sucess__img'>
          <img
            src='/illustration-sucess.png'
            alt='Sucess - Delivery Illustration'
          />
        </div>

        <div>
          <S.SucessHeader>
            <h2>Uhu! Pedido confirmado</h2>
            <p>Agora é só aguardar que logo o café chegará até você</p>
          </S.SucessHeader>

          <SucessInfos className='sucess__infos__01' />
        </div>
      </div>

      <SucessInfos className='sucess__infos__02' />
    </S.Sucess>
  )
}

export default Sucess
