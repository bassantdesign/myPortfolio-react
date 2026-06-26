import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import { createBrowserRouter, RouterProvider} from 'react-router'
import Layout from './component/Layout/Layout'
import Portfolio from './component/Portfolio/Portfolio'
import About from './component/About/About'
import Contact from './component/Contact/Contact'
import Home from './component/Home/Home'
import NotFound from './component/NotFound/NotFound'

function App() {
  const [count, setCount] = useState(0)

let routes = createBrowserRouter([
          {path:'', element: <Layout/>, children:[
          {index: true, element: <Home/>},
          {path:'portfolio', element: <Portfolio/>},
          {path:'about', element: <About/>},
          {path:'contact', element: <Contact/>},
          {path:'*', element: <NotFound/>}
        ]}
    ])

  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
