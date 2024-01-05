import React, { useState } from 'react'

function RecipeCreate({ createRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared. DONE
  // TODO: Add the required input and textarea form elements. DONE
  // TODO: Add the required submit and change handlers DONE

  const [name, setName] = useState('')
  const [cuisine, setCuisine] = useState('')
  const [photo, setPhoto] = useState('')
  const [rating, setRating] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [preparation, setPreparation] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (name && cuisine && photo && ingredients && preparation) {
      createRecipe({ name, cuisine, photo, ingredients, preparation })

      setName('')
      setCuisine('')
      setPhoto('')
      setIngredients('')
      setPreparation('')
    }
  }

  const handleChange = ({ target }) => {
    if (target.name === 'name') {
      setName(target.value)
    } else if (target.name === 'cuisine') {
      setCuisine(target.value)
    } else if (target.name === 'photo') {
      setPhoto(target.value)
    } else if (target.name === 'ingredients') {
      setIngredients(target.value)
    } else {
      setPreparation(target.value)
    }
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                value={name}
                placeholder="Name"
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                name="cuisine"
                value={cuisine}
                placeholder="Cuisine"
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                name="photo"
                value={photo}
                placeholder="URL"
                onChange={handleChange}
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                value={ingredients}
                placeholder="Ingredients"
                onChange={handleChange}
              />
            </td>
            <td>
              <textarea
                name="preparation"
                value={preparation}
                placeholder="Preparation"
                onChange={handleChange}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  )
}

export default RecipeCreate
