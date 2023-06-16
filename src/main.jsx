import React from 'react'
import ReactDOM from 'react-dom/client'
import 'react-input-mask'
import App from './App'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Login from './formulários/login.jsx'
import CadProdutos from './formulários/cadProdutos.jsx'
import CadEmpresas from './formulários/cadEmpresas.jsx'
import CatEmpresas from './páginas/catEmpresas.jsx'
import CatProdutos from './páginas/catProdutos.jsx'
import CadUsuario from './formulários/cadUsuario'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/home",
    element: <App />
  },
  {
    path: "/CatalogoDeEmpresas",
    element: <CatEmpresas />
  },
  {
    path: "/CatalogoDeProdutos",
    element: <CatProdutos />
  },
  {
    path: "/CadastroDeEmpresas",
    element: <CadEmpresas />
  },
  {
    path: "/CadastroDeProdutos",
    element: <CadProdutos />
  },
  {
    path: "/Cadastrar",
    element: <CadUsuario />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)