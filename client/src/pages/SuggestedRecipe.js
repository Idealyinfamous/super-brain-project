import * as React from "react";
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


function SuggestedRecipe() {

  const dummyIngredients = ["Onions", "Potatoes", "Chicken", "Salt", "Oil"]
  const description = "The best recipe of all times."
  const recipeName = "Chocolate Cake"
  const prepTime = '30 min';
  const totalTime = '50min'


  return (
    <>
      <div className="wrapper">
        <div>
          <h1>Here is your <span className="brown">recipe</span></h1>
          <div className="card card-grid">
            <div className="card-image-container">
              <img />
            </div>
            <div className="card-details-container">
              <h2>{recipeName}</h2>

              <ul className="ingredients">
                {
                  dummyIngredients.map((ingredient)=>(
                    <li className="ingredient">{ingredient}</li>
                  ))
                }
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