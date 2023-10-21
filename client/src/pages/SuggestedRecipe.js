import { React, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  PlusCircle,
  CaretLeftFill,
  CaretRightFill,
} from "react-bootstrap-icons";
import SlotMachineD from "../components/SlotMachine/SlotMachineD";

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

const SPOON_API_KEY = "a96058abd5a1493b811ccd7bf0e449f9";
const SPOON_API_URL = "https://api.spoonacular.com";

function SuggestedRecipe() {
  const [loading, setLoading] = useState(false);

  const { recipeId } = useParams();
  const [recipeInfo, setRecipeInfo] = useState([]);

  let url = `${SPOON_API_URL}/recipes/${recipeId}/information?includeNutrition=false&apiKey=${SPOON_API_KEY}`;
  let headers = { "Content-Type": "application/json" };

  useEffect(() => {
    setLoading(true);
    axios
      .get((url = url), (headers = headers))
      .then((response) => {
        console.log(response);
        setRecipeInfo(response.data);
        setTimeout(() => {
          console.log("Time out");
          setLoading(false);
        }, 6800);
      })
      .catch((error) => {
        console.log("There was an error and here it is: ", error);
        setLoading(false);
      });
  }, []);

  if (recipeInfo && recipeInfo.extendedIngredients && !loading) {
    return (
      <>
        <div className="wrapper">
          <div>
            <h1 className="text-center">
              Here is your <span className="brown">recipe</span>
            </h1>

            <div className="card card-grid">
              <div className="card-image-container">
                <img src={recipeInfo.image} />
              </div>
              <div className="card-details-container">
                <h2 className="text-center">{recipeInfo.title}</h2>

                <ul>
                  {recipeInfo.extendedIngredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.name}</li>
                  ))}
                </ul>
                <div className="times-container">
                  <div className="text-center">
                    <p>
                      <b>Ready in {recipeInfo.readyInMinutes} minutes</b>
                    </p>
                  </div>
                </div>
                <h3>Description</h3>
                <p dangerouslySetInnerHTML={{ __html: recipeInfo.summary }} />
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </>
    );
  } else {
    return <SlotMachineD />;
  }
}
export default SuggestedRecipe;
