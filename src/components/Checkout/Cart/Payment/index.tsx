import * as S from './styles'
import * as Icon from 'phosphor-react'

export const Payment = () => {
  return (
    <S.Payment>
      <S.PaymentHeader>
        <Icon.CurrencyDollar />

        <div>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </S.PaymentHeader>

      <S.PaymentOptions>
        <button>
          <Icon.CreditCard /> Cartão de Crédito
        </button>
        <button>
          <Icon.Bank /> Cartão de Débito
        </button>
        <button>
          <Icon.Money /> Dinheiro
        </button>
      </S.PaymentOptions>
    </S.Payment>
  )
}
