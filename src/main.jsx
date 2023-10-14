import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import NotFound from './pages/NotFound.jsx'
import Layout from './components/Layout.jsx'
import Index from './pages/Index.jsx'
import Compound from './pages/Compound.jsx'
import Context from './pages/Context.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Index />} />
    <Route element={<Compound />} path='compound' />
    <Route element={<Context />} path='context' />
    <Route path='*' element={<NotFound />} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />  
  </React.StrictMode>,
)
