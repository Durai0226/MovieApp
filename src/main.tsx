import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Movielist from './components/movielist';
import CompanyInfo from './components/companyInfo';
const router = createBrowserRouter([
  {
    path: "/",
    element:     <App />,
  },
  {
    path:'/movielist',
    element:<Movielist></Movielist>
  },
  {
    path:'/companyInfo',
    element:<CompanyInfo></CompanyInfo>
  }
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
