import * as zod from 'zod'

export const newOrderFormValidationSchema = zod.object({
  cep: zod.string().min(9, 'Informe o CEP 9').max(9, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  complement: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(1, 'Informe a UF').max(2),
  paymentMethod: zod.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>
