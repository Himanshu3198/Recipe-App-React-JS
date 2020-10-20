import React,{useState} from 'react';
import Axios from 'axios'
import {v4 as uuidv4} from 'uuid';
import './App.css';
import Recipe from './component/Recipe'
import Alert from './component/alert'
const App=()=>{
  const [query,setQuery]=useState("");
  const [recipes,setRecipes] =useState([]);
  const [alert,setAlert]=useState("");
  const APP_ID="75c0fba9"
  const APP_KEY="718c497dd14e14f7cbea51eb8f6a5a94	"
  const url=`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  const getData=async ()=>{
    if(query!==""){
       const result=await Axios.get(url);
       if(!result.data.more){
         return setAlert("Ooops No Recipe found")
       }
    setRecipes(result.data.hits)
    console.log(result)
    setAlert(" ");
    setQuery("")
    }
    else{
      setAlert("Please Enter Recipe First")
    }

   
  }
  const onChange=e=>{
    setQuery(e.target.value);
    //  console.log(e.target.value)

  }
  const onSubmit=(e)=>{
    e.preventDefault();
    getData();

  }
  return(
    <div className="App">
      <h1 onClick={getData}>Food Recipe Finder</h1>
      <form className="search-form" onSubmit={onSubmit}>
        {alert!==" " &&<Alert alert={alert}/>}
        <input type="text"
         placeholder="Search Food" 
         autoComplete="on" 
         onChange={onChange}
         value={query}
         />
        <input type="submit" value="Search"></input>

      </form>
      <div className="recipes">
        {recipes!==[] && recipes.map(recipe=><Recipe key={uuidv4()} recipe={recipe}/>)}
      </div>
    </div>
  )
}

export default App;
