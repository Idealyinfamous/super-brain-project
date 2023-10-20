import React from 'react'
import IngredientsForm from "../components/IngredientsForm";
import '../App.css'

function HomePage() {
  return (
    <>
      <div className="wrapper">
        <div>
        <h1 className='text-center'>Hi, let's get <b className='brown'>dinner</b> going!</h1>
        <div className='card'>
          <p>Add Ingredients to the list</p>
          <div><IngredientsForm /></div>
        </div>
        </div>

      </div>

    </>

  )
}

export default HomePage