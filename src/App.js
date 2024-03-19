// import { ClassNames } from '@emotion/react';
import React from 'react'
import Products from './components/pages/Products';
import Features from './components/pages/Features';
import SignUp from './components/pages/SignUp';
import LogIn from './components/pages/LogIn';
import Home from './components/pages/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/products",
      element: <Products />,
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
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <div>
      <ChakraProvider>
      <div className='App'>
        <RouterProvider router={router} />
        </div>
      </ChakraProvider>

    </div>
  )
}

export default App