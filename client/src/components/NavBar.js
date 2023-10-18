import React from 'react'
import { Link } from "react-router-dom";
import { useCurrentUser } from '../hooks/useCurrentUser'
import { PassageUser } from '@passageidentity/passage-elements/passage-user';
import LogoutButton from './LogOutButton';


function NavBar() {

    return (
        <div>
            <Link to="/">Get a Recipe</Link>
            <Link to="/my-recipes">My Saved Recipes</Link>
            <Link to="/recipe-details">Recipe Details</Link>
            <Link to="/register-or-login">Register or Login</Link>
            <span><LogoutButton/></span>
        </div>
    )
}

export default NavBar