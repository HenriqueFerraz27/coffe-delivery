import { ThemeProvider } from 'styled-components'
import { darkTheme } from './styles'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  NewOrderFormData,
  newOrderFormValidationSchema,
} from './schemas/newOrderFormValidation'
import { CartContextProvider } from './contexts/CartContext'

function App() {
  const newOrderFormContext = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <FormProvider {...newOrderFormContext}>
        <CartContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </CartContextProvider>
      </FormProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
