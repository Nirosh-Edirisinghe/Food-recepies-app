import React from 'react'
import foodRecipe  from '../assets/foodRecipe.png'
import RecipeItem from '../components/RecipeItem'
export default function Home() {
  return (
    <>
      
      <section className='home'>
         <div className="left">
            <h1>Food Recipe</h1>
            <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti mollitia consequatur sunt magnam nisi soluta quos consectetur dicta voluptatem recusandae. Dolorem, quod cum minima aspernatur repellendus consectetur sequi officia accusamus.</h5>
            <button>Share your recipe</button>
         </div>
         <div className="right">
            <img src={foodRecipe} width="320px" height="300px"></img>
         </div>
      </section>
      <div className="bg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d4f6e8" fill-opacity="1" d="M0,64L30,69.3C60,75,120,85,180,117.3C240,149,300,203,360,224C420,245,480,235,540,208C600,181,660,139,720,154.7C780,171,840,245,900,256C960,267,1020,213,1080,186.7C1140,160,1200,160,1260,176C1320,192,1380,224,1410,240L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
      </div>
     <div className="recipe">
      <RecipeItem/>
     </div>
    </>
  )
}
