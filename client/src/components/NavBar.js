import React from 'react'
import { Link } from "react-router-dom";
import { useCurrentUser } from '../hooks/useCurrentUser'
import { PassageUser } from '@passageidentity/passage-elements/passage-user';


function NavBar() {
    let user = null;
    const {isLoading, isAuthorized} = useCurrentUser();
    if (isAuthorized) {
      user = new PassageUser()
    }

    const handleSignOut = () => {
        console.log("sign out")
        user.signOut()
    }

    return (
        <div>
            <Link to="/">Get a Recipe</Link>
            <Link to="/my-recipes">My Saved Recipes</Link>
            <Link to="/recipe-details">Recipe Details</Link>
            <Link to="/register-or-login">Register or Login</Link>
            <span onClick={handleSignOut}>sign out</span>
        </div>
    )
}

export default NavBar