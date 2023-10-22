import React from 'react'
import { Link } from "react-router-dom";
import { useCurrentUser } from '../hooks/useCurrentUser'
import { PassageUser } from '@passageidentity/passage-elements/passage-user';
import LogoutButton from './LogOutButton';


function NavBar() {

    return (
        // <div>
        //     <Link to="/">Get a Recipe</Link>
        //     <Link to="/my-saved-recipes">My Saved Recipes</Link>
        //     {/* <Link to="/recipe-details">Recipe Details</Link> */}
        //     <Link to="/register-or-login">Register or Login</Link>
        //     <span><LogoutButton/></span>
        // </div>

        //-----Hopefully this is prettier
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">Recipe Finder</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="/">Get a Recipe <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/my-saved-recipes">Saved Recipes</a>
                </li>
                <li class="nav-item dropdown mr-sm-2">
                    <a class="nav-link dropdown-toggle " href="/register-or-login" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sign Up
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="/register-or-login">Register or Login</a>
                        <span class="dropdown-item "><LogoutButton/></span>

                    </div>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default NavBar