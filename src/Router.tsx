import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Checkout from './pages/Cart'
import { DefaultLayout } from './layouts/DefaultLayout'
import Sucess from './pages/Sucess'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/order/:orderId/success' element={<Sucess />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
