import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import SignUp from './components/Auth/SignUp.jsx'
import Signin from './components/Auth/Signin.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
