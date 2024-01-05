import React from 'react'

function RecipeView({ recipe, index, deleteReceipe }) {
  return (
    <>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>{<img alt={recipe.photo} src={recipe.photo} />}</td>
      <td className="content_td">
        <p>{recipe.ingredients}</p>
      </td>
      <td className="content_td">
        <p>{recipe.preparation}</p>
      </td>
      <td>
        <button name="delete" onClick={() => deleteReceipe(index)}>
          Delete
        </button>
      </td>
    </>
  )
}

export default RecipeView
