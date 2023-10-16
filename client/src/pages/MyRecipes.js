import React from 'react'
import {useCurrentUser} from '../hooks/useCurrentUser';


function MyRecipes() {
  const {isLoading, isAuthorized} = useCurrentUser();

  if (isLoading) {
      return null;
  }
  const authorizedBody =
  <>
      <h1>Your Saved Recipes</h1>
  </>

  const unauthorizedBody =
  <>
      Create an account or log in to your saved recipes.
      <br/><br/>
      <a href="/register-or-login">Login to continue.</a>
  </>

  return (
      <div >
          <div >{isAuthorized ? 'Welcome!' : 'Unauthorized'}</div>
          <div >
              { isAuthorized ? authorizedBody : unauthorizedBody }
          </div>
      </div>
  );

}

export default MyRecipes;