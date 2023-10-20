import React from "react";
import { PassageAuthGuard } from "@passageidentity/passage-react";
import { usePassageUserInfo } from "../hooks/";
import { PlusCircle, CaretLeftFill } from 'react-bootstrap-icons'
import Button from "@mui/material/Button";
import axios from 'axios'

function RecipeDetails() {

  const dummyIngredients = ["potato", "onions", "chicken"]

  const { userInfo, loading } = usePassageUserInfo();

  const handleSaveRecipeClick = () => {
    if (userInfo) {
      let data = {
        user_id: userInfo["id"],
        recipe_id: "69",
        title: "testing again",
        image: "www.bar.com",
      };

      axios
        .post("/save_recipe", data)
        .then((response) => {
          // Handle the success response
          console.log("Response data:", response.data);
        })
        .catch((error) => {
          // Handle errors
          console.error("Error:", error);
        });

    } else {
      console.log("should be logged out");
      // show log in prompt
    }
  };

  document.body.style.backgroundColor = '#97bfd1';

  return (
    <>

      <div id="recipe-details-section">

        <h1 className='text-center'>Recipe Name</h1>
        <div className='details'>

          <div className='img-container'>
            <img src='https://spoonacular.com/recipeImages/73420-312x231.jpg' />
          </div>
          <p className='text-center icon'>
            <PlusCircle onClick={handleSaveRecipeClick} />
          </p>
          <div className='recipe-details-content'>
            <h3>Description</h3>
            <p>LoremImpsum agasgasgjalsgjasfjlsdjfh jlkaghaslkgjasdg  gjglfjajfaslj</p>
            <div className='ingredients-section'>
            <h4>ingredients list</h4>
            <ul>
              {
                dummyIngredients.map((ingredient) => (
                  <li>{ingredient}</li>
                ))
              }
            </ul>
            </div>
            
            <h3>Instructions</h3>
            <p>Hmmmm, this isn't really what I'm looking for</p>
          </div>
        </div>

        <Button style={
          {
            borderRadius: 20,
            backgroundColor: '#f4c17f',
            fontFamily: 'Open-Dyslexic',
            color: '#6c3428',
            marginTop: 10,
          }
        }
          variant="contained" onClick={()=>{console.log('Get another recipe')}}>
          <CaretLeftFill></CaretLeftFill>I want another recipe 
        </Button>
      </div>
    </>
  );
}

export default RecipeDetails;
