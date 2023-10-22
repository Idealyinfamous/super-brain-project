import React from 'react'
import { Link } from "react-router-dom";
import { useCurrentUser } from '../hooks/useCurrentUser'
import { PassageUser } from '@passageidentity/passage-elements/passage-user';
import LogoutButton from './LogOutButton';
import { useMyContext } from './MyContext';
//updated navbar for recipe details to use the global variable GlobalRecipeID where the recipeID is stored and updated

function NavBar() {

    const { GlobalRecipeID, setGlobalRecipeID } = useMyContext();

    return (
        <div>
            <Link to="/">Get a Recipe</Link>
            <Link to="/my-saved-recipes">My Saved Recipes</Link>
            <Link to={`/recipe-details/${GlobalRecipeID}`}>Recipe Details</Link>
            <Link to="/register-or-login">Register or Login</Link>
            <span><LogoutButton/></span>
        </div>
    )
}

export default NavBar