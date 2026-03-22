import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Cart from './pages/Cart'
import CartLayout from './layouts/CartLayout'
import MainLayout from './layouts/MainLayout'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" Component={Home} />

          <Route Component={CartLayout}>
            <Route path="cart" Component={Cart} />
          </Route>

        </Routes>
      </MainLayout>
    </BrowserRouter>
  </StrictMode >
)
