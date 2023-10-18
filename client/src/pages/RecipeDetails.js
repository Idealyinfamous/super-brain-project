import React from 'react'
import LogInPrompt from '../components/LogInPrompt';
import { useCurrentUser } from '../hooks/useCurrentUser'
import { PassageUser } from '@passageidentity/passage-elements/passage-user';

function RecipeDetails() {
  const {isLoading, isAuthorized} = useCurrentUser();

  const handleSaveRecipeClick = () => {
    if (isAuthorized) {
      console.log("RecipeDetails, isAuthorized via useCurrentUser: ",isAuthorized)
      // TODO make a call to the db and save this recipe ID with this user
    }
    else {
      // show log in prompt
    }
  };

  return (
    <>
      <h1>Recipe Details</h1>
      <div onClick={handleSaveRecipeClick}>Save this to My Recipes</div>
      Image goes here
      <img src=''/>
      <p>description</p>
      <h4>ingredients list</h4>
      <ul>
          <li>thing</li>
          <li>thing</li>
          <li>thing</li>
          <li>thing</li>
        </ul>
      <p>instructions</p>
      <p>Hmmmm, this isn't really what I'm looking for</p>
      <button>Let me choose another recipe</button>
      <LogInPrompt/>
    </>
  )
}

export default RecipeDetails