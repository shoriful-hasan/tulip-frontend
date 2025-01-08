import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Route/Route.jsx'
import Authprovider from './Authprovider/Authprovider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Authprovider Details={<RouterProvider router={router}></RouterProvider>}></Authprovider>
  </StrictMode>,
)
