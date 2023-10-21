import React from 'react'
import IngredientsForm from "../components/IngredientsForm";
import '../App.css'

function HomePage() {

  const onSubmit= (e) => {
    console.log("submitting")
  }

  document.body.style.backgroundColor = "white";

  return (
    <>
      <div className="wrapper">
        <div>
        <h1 className='text-center'>Hi, let's get <b className='brown'>dinner</b> going!</h1>
        <div className='card'>
          <p>Add Ingredients to the list</p>
          <div><IngredientsForm handleSubmit={onSubmit}/></div>
        </div>
        </div>

      </div>

    </>

  )
}

export default HomePage