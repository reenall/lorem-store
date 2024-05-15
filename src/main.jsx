import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import ErrorMessage from './pages/404message'
import ProductPage from './pages/products'
import { DetailProduct } from './pages/detailProduct'
import { Provider } from 'react-redux'
import store from './redux/store'
import DarkModeContextProvider from './context/DarkMode'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProductPage/>,
    errorElement: <ErrorMessage />
  },
  {
    path: '/login',
    element: <LoginPage/>
  },
  {
    path: '/register',
    element: <RegisterPage/>
  },
  {
    path: '/products',
    element: <ProductPage/>
  },
  {
    path: '/product/:id',
    element: <DetailProduct/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        {/* <RouterProvider router={router} /> */}
        
        {/* gh-pages gak bisa routing */}
        <ProductPage/>
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>,
)
