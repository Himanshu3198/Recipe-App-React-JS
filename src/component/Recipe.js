import React,{useState} from 'react'
import RecipeDetails from './recipeDetails';

 const Recipe=({recipe})=> {
     const [show,setshow]=useState(false)
     const {label,image,url,ingredients} =recipe.recipe;
    return (
        <div>
            <div className="recipe">
                <h2>{label}</h2>
                <img src={image} alt={label}/>
                <a href={url} target="_blank"
                rel="noopener noreferrer">URL</a>
              <button onClick={()=>setshow(!show)}>Ingridents</button>
              {show && <RecipeDetails ingredients={ingredients}/>}

            </div>
        </div>
    )
}
export default Recipe;
