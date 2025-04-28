import React from 'react'
import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './pages/Home'
import MainNavigation from './components/MainNavigation'
import axios from 'axios'
import AddFoodRecipe from './pages/AddFoodRecipe'

const getAllRecipe = async()=>{
  let allRecipe = []
  await axios.get('http://localhost:5000/recipe').then(res=>{
    allRecipe = res.data
  })
  return allRecipe
}

const router = createBrowserRouter([
  {path:"/",element:<MainNavigation/>,children:[
    {path:"/",element:<Home/>,loader:getAllRecipe},
    {path:"/myRecipe",element:<Home/>},
    {path:"/favRecipe",element:<Home/>},
    {path:"/addRecipe",element:<AddFoodRecipe/>},
  ]}
  
])
export default function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      
    </>
  )
}
