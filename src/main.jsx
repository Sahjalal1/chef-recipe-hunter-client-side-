import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './routers/Routers';
import AuthProvider from './Providers/AuthProviders';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
