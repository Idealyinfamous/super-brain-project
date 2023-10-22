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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand my-1" href="/">
        <img src={"./NavBarLogo.png"} width="35" height="35" className="rounded-circle d-inline-block mr-2" alt=""/>
        FOCUS FOOD
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Get a Recipe <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/my-saved-recipes">Saved Recipes</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/register-or-login" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sign Up
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="/register-or-login">Register or Login</a>
                        <span className="dropdown-item "><LogoutButton/></span>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default NavBar