import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import{ createBrowserRouter, RouterProvider, Route} from "react-router-dom"
import './index.css'
import App from './App.jsx'

//routes
import Home from './routes/Home.jsx'
import NewPost from './routes/NewPost.jsx'
import Post from './routes/Post.jsx'
import Admin from './routes/Admin.jsx'
import EditPost from './routes/EditPost.jsx'

const router = createBrowserRouter([
  {
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"/new",
        element:<NewPost></NewPost>,
      },
      {
        path:"/posts/:id",
        element: <Post></Post>
      },
      {
        path:"/admin",
        element: <Admin></Admin>
      },
      {
        path:"posts/edit/:id",
        element: <EditPost></EditPost>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </StrictMode>,
)
