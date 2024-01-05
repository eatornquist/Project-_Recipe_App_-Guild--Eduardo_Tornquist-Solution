import React, { useState } from 'react'
import './App.css'
import RecipeCreate from './RecipeCreate'
import RecipeList from './RecipeList'
import RecipeData from './RecipeData'

function App() {
  const [recipes, setRecipes] = useState(RecipeData)

  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  const createReceipe = (newReceipe) => {
    setRecipes((currentReceipe) => [newReceipe, ...currentReceipe])
    console.log(recipes)
  }

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  const deleteReceipe = (indexToDelete) => {
    setRecipes((currentReceipe) =>
      currentReceipe.filter((receipe, index) => index !== indexToDelete)
    )
  }

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} deleteReceipe={deleteReceipe} />
      <RecipeCreate createReceipe={createReceipe} />
    </div>
  )
}

export default App
