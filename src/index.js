import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import RootLayout from './pages/RootLayout'
import AddPost from './pages/AddPost'
import Details from './pages/Details'
import Index from './pages/Index'
import EditPost from './pages/EditPost'
import ErorrPage from './pages/ErorrPage'

const loaderHandler = ({ params }) => {
  if (isNaN(params.id)) {
    throw new Response('Bad Request', {
      statusText: 'please make sure to insert correct post ID',
      status: 400,
    })
  }
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErorrPage />,
    children: [
      { index: true, element: <Index /> },
      { path: 'post', element: <Index /> },
      { path: 'post/add', element: <AddPost /> },
      {
        path: 'post/:id',
        element: <Details />,
        loader: loaderHandler,
      },
      { path: 'post/:id/edit', element: <EditPost />, loader: loaderHandler },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
