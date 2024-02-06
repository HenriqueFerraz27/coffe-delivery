import * as S from './styles'

interface InputCounterItemProps {
  quantity: number
  handleDecrement: () => void
  handleIncrement: () => void
}

export const InputCounterItem = ({
  quantity,
  handleDecrement,
  handleIncrement,
}: InputCounterItemProps) => {
  return (
    <S.InputCounterItem>
      <input type='number' min={1} max={10} value={quantity} readOnly />
      <div>
        <span onClick={handleDecrement}>--</span>
        <span onClick={handleIncrement}>+</span>
      </div>
    </S.InputCounterItem>
  )
}
