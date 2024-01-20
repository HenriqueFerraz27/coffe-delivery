import { CoffeeItem } from '..'
import * as S from './styles'

export const CoffeeList = () => {
  return (
    <S.CoffeeListArticle>
      <h2>Nossos Cafés</h2>

      <S.CoffeeList>
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
      </S.CoffeeList>
    </S.CoffeeListArticle>
  )
}
