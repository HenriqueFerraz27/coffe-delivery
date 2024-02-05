import { ThemeProvider } from 'styled-components'
import { darkTheme } from './styles'
import { GlobalStyle } from './styles/global'
import { CartContextProvider } from './contexts/CartContext'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { NewOrderData, newOrder } from './schemas/newOrder'
import { Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const NewOrderFormContext = useForm<NewOrderData>({
    resolver: zodResolver(newOrder),
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <CartContextProvider>
        <FormProvider {...NewOrderFormContext}>
          <Header />
          <Outlet />
        </FormProvider>
      </CartContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
