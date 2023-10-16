import React from 'react'
import LogInPrompt from '../components/LogInPrompt';
import { useCurrentUser } from '../hooks/useCurrentUser'
import { PassageUser } from '@passageidentity/passage-elements/passage-user';

function RecipeDetails() {
  let user = null;
  const {isLoading, isAuthorized} = useCurrentUser();
  if (isAuthorized) {
    user = new PassageUser()
  }

  const handleSaveRecipeClick = () => {
    if (isAuthorized) {
      console.log("User is authorized")
      console.log(user)
      // TODO make a call to the db and save this recipe ID with this user
    }
    else {
      // show log in prompt
    }
  };

  const handleSignOut = () => {
    console.log("sign out")
    user.signOut()
  }

  return (
    <>
      <div onClick={handleSignOut}>sign out</div>
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