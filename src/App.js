import React from 'react'
import SignUp from './components/pages/SignUp';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Cart from './components/pages/Cart';
import { AppContext } from './context/AppContext';
import Products from './components/pages/Products';
import Home from './components/pages/Home';


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/product",
      element: <Products />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/login",
      // element: <Login />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ]);
  return (
    <>
      <ChakraProvider>
        <AppContext>
          <div className="App">
            <RouterProvider router={router} />
          </div>
        </AppContext>
      </ChakraProvider>
    </>

  );
};

export default App