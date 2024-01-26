import { Coffee } from "./coffee";

export interface CartItem extends Coffee {
  quantity: number
}
