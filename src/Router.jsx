import React from 'react'
import {useRoutes} from "react-router-dom" 
import Home from "./Pages/Home/Home"

const Router = () => {
  return useRoutes([
    {
        path: "/",
        element: <Home/>,
    }

  ] 
  )
}

export default Router
