import { ThemeProvider } from 'styled-components'
import { darkTheme } from './styles'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { CartItemsContextProvider } from './contexts/CartItemsContext'

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CartItemsContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartItemsContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
