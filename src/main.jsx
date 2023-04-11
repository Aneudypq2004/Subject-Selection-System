import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './context/AppContex'

import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <App />
        <ToastContainer
          autoClose={500}
          theme='colored'
          // position="top-left"

        />

      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>,
)
