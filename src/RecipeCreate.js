import React, { useState } from "react";

function RecipeCreate({createReceipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared. DONE
  // TODO: Add the required input and textarea form elements. DONE
  // TODO: Add the required submit and change handlers DONE
  
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [rating, setRating] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault()
    createReceipe({name, cuisine, photo, ingredients, preparation})

    setName("")
    setCuisine("")
    setPhoto("")
    setIngredients("")
    setPreparation("")
  }

  const handleChange = ({target}) => {

    if(target.name === 'name'){
      setName(target.value)
    }
    else if(target.name === 'cuisine'){
      setCuisine(target.value)
    }
    else if(target.name === 'photo'){
      setPhoto(target.value)
    }
    else if(target.name === 'ingredients'){
      setIngredients(target.value)
    }
    else {
      setPreparation(target.value)
    }
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input name="name" value={name} onChange={handleChange}/>
            </td>
            <td>
              <input name="cuisine" value={cuisine} onChange={handleChange}/>
            </td>
            <td>
              <input name="photo" value={photo} onChange={handleChange}/>
            </td>
            <td>
              <textarea name="ingredients" value={ingredients} onChange={handleChange}/>
            </td>
            <td>
              <textarea name="preparation" value={preparation} onChange={handleChange}/>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
