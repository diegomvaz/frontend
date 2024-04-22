
import './App.css'
import Pedidos from "./pages/pedidos";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./pages/login";

const router = createBrowserRouter([
  {
    element: <Login />,
    path: ''
  },
  {
    element: <Pedidos />,
    path: 'pedidos'
  }
])


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
