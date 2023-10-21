import { React, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { styled } from "@mui/material/styles";
import {
  Paper,
  Grid,
  Container,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
// import Container from '@mui/material/Container'
// import Button from '@mui/material/Button'
import JSConfetti from "js-confetti";
import axios from "axios";

const SPOON_API_KEY = "622012b5d9bb4844bda0fe5a12cfd221";
const SPOON_API_URL = "https://api.spoonacular.com";

function SuggestedRecipe() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState([]);

  let url = `${SPOON_API_URL}/recipes/${recipeId}/information?apiKey=${SPOON_API_KEY}`
  let headers = { 'Content-Type': 'application/json' }

  useEffect(() => {
    axios
    .get((url = url), (headers = headers))
    .then((response) => {
      console.log(response)
      // setRecipe(response.data)
    })
    .catch((error) => {
      console.log("There was an error and here it is: ", error);
    });
  }, [])

  const dummyIngredients = ["Onions", "Potatoes", "Chicken", "Salt", "Oil"];
  const description = "The best recipe of all times.";
  const recipeName = "Chocolate Cake";
  const prepTime = "30 min";
  const totalTime = "50min";

  return (
    <>
      <div className="wrapper">
        <div>
          <h1>
            Here is your <span className="brown">recipe</span>
          </h1>
          <div className="card card-grid">
            <div className="card-image-container">
              <img />
            </div>
            <div className="card-details-container">
              <h2>{recipeName}</h2>

              <ul className="ingredients">
                {dummyIngredients.map((ingredient) => (
                  <li className="ingredient">{ingredient}</li>
                ))}
              </ul>
              <div>
                <p>Prep Time</p>
                <p>Total Time</p>
              </div>
              <h3>Description</h3>
              <p>Lorem Ipsaoifvgasghasgjasfjoais</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SuggestedRecipe;
