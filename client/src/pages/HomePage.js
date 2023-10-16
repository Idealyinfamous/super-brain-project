import React from 'react'
import DropdownMenu from "../components/DropdownMenu";
import Passage from './PassagePage';


function HomePage() {
  return (
    <>
        <h1>Hi, let's get dinner going!</h1>
        <p>Brief Summary</p>
        <div><DropdownMenu/></div>
        <button>Try me</button>
    </>

  )
}

export default HomePage