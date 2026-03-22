import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools/production';

import HomeLayout from './layouts/HomeLayout';
import Home from './pages/Home';
import Product from './pages/product/Product';
import Cart from './pages/Cart';
import './index.css';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <HomeLayout>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="product/:id" Component={Product} />
            <Route path="cart" Component={Cart} />
          </Routes>
        </HomeLayout>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>
);
