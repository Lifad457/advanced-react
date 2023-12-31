import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import NotFound from './pages/NotFound.jsx'
import Layout from './components/Layout.jsx'
import Index from './pages/Index.jsx'
import Compound from './pages/Compound.jsx'
import Context from './pages/Context.jsx'
import Headless from './pages/Headless.jsx'
import RenderProps from './pages/RenderProps.jsx'
import CustomHooks from './pages/CustomHooks.jsx'
import SoloProjects from './pages/SoloProjects.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Index />} />
    <Route element={<Compound />} path='compound' />
    <Route element={<Context />} path='context' />
    <Route element={<Headless />} path='headless' />
    <Route element={<RenderProps />} path='render-props' />
    <Route element={<CustomHooks />} path='custom-hooks' />
    <Route element={<SoloProjects />} path='solo-projects' />
    <Route path='*' element={<NotFound />} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />  
  </React.StrictMode>,
)
