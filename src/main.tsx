import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, ScrollRestoration, Outlet } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools/production';

import HomeLayout from './layouts/HomeLayout';
import Home from './pages/Home';
import Product from './pages/product/Product';
import Cart from './pages/Cart';
import './index.css';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <HomeLayout>
        <ScrollRestoration />
        <Outlet />
      </HomeLayout>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: 'product/:id', element: <Product /> },
      { path: 'cart', element: <Cart /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>
);
