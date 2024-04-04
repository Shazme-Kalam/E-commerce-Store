// import { ClassNames } from '@emotion/react';
import React from 'react'
import Product from './components/pages/Product';
import Features from './components/pages/Features';
import SignUp from './components/pages/SignUp';
import LogIn from './components/pages/LogIn';
import Home from './components/pages/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Cart from './components/pages/Cart';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/product",
      element: <Product />,
    },
    {
      path: "/features",
      element: <Features />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <LogIn />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ]);
  return (
    <div>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>

    </div>
  )
}

export default App