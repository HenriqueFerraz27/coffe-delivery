import { ThemeProvider } from 'styled-components'
import { darkTheme } from './styles'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { CartContextProvider } from './contexts/CartContext'

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CartContextProvider>
        <Router />
      </CartContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
