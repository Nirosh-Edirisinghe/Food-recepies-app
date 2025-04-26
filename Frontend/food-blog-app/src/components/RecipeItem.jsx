import React from 'react'
import { useLoaderData } from 'react-router-dom'
import foodRecipe from '../assets/foodRecipe.png'
import { BsStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

export default function RecipeItem() {
   const allRecipe = useLoaderData()
   console.log(allRecipe);
   
  return (
    <>
      <div className="card-container">
         {
            allRecipe?.map((item,index)=>{
               return(
                  <div key={index} className='card'>
                     <img src={foodRecipe} width="120px" height="100px"/>
                  <div className="card-body">
                     <div className="title">{item.title}</div>
                     <div className="icons">
                        <div className="time"><BsStopwatchFill /></div>
                        <FaHeart />
                     </div>
                  </div>

                  </div>
               )
            })
         }
      </div>
    </>
  )
}
