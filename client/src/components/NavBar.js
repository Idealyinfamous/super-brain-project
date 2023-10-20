import React from 'react'
import { Link } from "react-router-dom";
import { useCurrentUser } from '../hooks/useCurrentUser'
import { PassageUser } from '@passageidentity/passage-elements/passage-user';
import LogoutButton from './LogOutButton';


function NavBar() {

    return (
        <nav className="nav">
        {/* <div className="link"> */}
            <Link className="links" to="/">Get a Recipe</Link>
            <Link className="links" to="/my-recipes">My Saved Recipes</Link>
            <Link className="links" to="/recipe-details">Recipe Details</Link>
            <Link className="links" to="/register-or-login">Register or Login</Link>
            <span><LogoutButton/></span>
        {/* </div> */}
        </nav> 
    )
}

export default NavBar