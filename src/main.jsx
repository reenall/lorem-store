import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import ErrorMessage from './pages/404message'
import ProductPage from './pages/products'
import { ProfilePage } from './pages/profile'
import { DetailProduct } from './pages/detailProduct'
import { Provider } from 'react-redux'
import store from './redux/store'
import DarkModeContextProvider from './context/DarkMode'

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Hellow World!</h1>,
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
  {
    path: '/profile',
    element: <ProfilePage/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <RouterProvider router={router} />
      </DarkModeContextProvider>
    </Provider>
    {/* <App /> */}
  </React.StrictMode>,
)
