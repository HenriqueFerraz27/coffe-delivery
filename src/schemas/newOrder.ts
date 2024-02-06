import * as zod from 'zod'

const states = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
] as const

export const newOrder = zod.object({
  cep: zod.string().min(9, 'Informe o CEP').max(9, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod
    .number({
      invalid_type_error: 'Informe o número',
    })
    .min(1, 'Informe um número válido'),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.enum(states, {
    invalid_type_error: 'Informe a UF',
  }),
  paymentMethod: zod.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export type NewOrderData = zod.infer<typeof newOrder>
