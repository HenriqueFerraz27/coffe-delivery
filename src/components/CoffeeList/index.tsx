import { CoffeeItem } from '..'
import { coffees } from '../../datas/coffees.json'
import * as S from './styles'

export const CoffeeList = () => {
  return (
    <S.CoffeeListArticle>
      <h2>Nossos Cafés</h2>

      <S.CoffeeList>
        {coffees.map(coffee => {
          return (
            <CoffeeItem coffee={coffee}
            />
          )
        })}
      </S.CoffeeList>
    </S.CoffeeListArticle>
  )
}
