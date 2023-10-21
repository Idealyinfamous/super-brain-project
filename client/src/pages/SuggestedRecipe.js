import { React, useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import { PlusCircle, CaretLeftFill, CaretRightFill } from "react-bootstrap-icons";
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

const SPOON_API_KEY = "211a5be1593a4998b32368d3b3517ac6";
const SPOON_API_URL = "https://api.spoonacular.com";

function SuggestedRecipe() {

  const [loading, setLoading] = useState(false);

  const { recipeId } = useParams();
  const [recipeInfo, setRecipeInfo] = useState([]);

  let url = `${SPOON_API_URL}/recipes/${recipeId}/information?includeNutrition=false&apiKey=${SPOON_API_KEY}`
  let headers = { 'Content-Type': 'application/json' }

  useEffect(() => {

    setLoading(true);
    /*setTimeout(() => {
      console.log("Time out");
      setLoading(false)
    }, 6800);*/

    axios
      .get((url = url), (headers = headers))
      .then((response) => {
        console.log(response)
        setRecipeInfo(response.data)
        setTimeout(() => {
          console.log("Time out");
          setLoading(false)
        }, 6800);
      })
      .catch((error) => {
        console.log("There was an error and here it is: ", error);
        setLoading(false);
      });
  }, [])

  const dummyIngredients = ["Onions", "Potatoes", "Chicken", "Salt", "Oil"];
  const description = "The best recipe of all times.";
  const recipeName = "Chocolate Cake";
  const prepTime = "30 min";
  const totalTime = "50min";
  const imageSource = "https://spoonacular.com/recipeImages/633505-312x231.jpg";

  return (
    <>
      <div className="wrapper">
        <div>
          <h1 className="text-center">
            Here is your <span className="brown">recipe</span>
          </h1>
          {
            loading ?
              (<SlotMachineD />) :
              (
                <div className="card card-grid">
                  <div className="card-image-container">
                    <img src={recipeInfo.image} />
                  </div>
                  <div className="card-details-container">
                    <h2 className="text-center">{recipeInfo.title}</h2>

                    <ul className="ingredients">
                      {dummyIngredients.map((ingredient) => (
                        <li className="ingredient">{ingredient}</li>
                      ))}
                    </ul>
                    <div className="times-container">
                      <div className="text-center">
                        <p><b>Prep Time</b></p>
                        <p>{prepTime}</p>
                      </div>
                      <div className="text-center">
                        <p><b>Total Time</b></p>
                        <p>{totalTime}</p>
                      </div>
                    </div>
                    <h3>Description</h3>
                    <p>Lorem Ipsaoifvgasghasgjasfjoais</p>
                  </div>
                </div>
              )
          }

          {
            loading ? (
              <div></div>
            ) : (
              <div className="suggested-btns">
                <Link to="/recipe-details">
                  <Button
                    style={{
                      borderRadius: 20,
                      backgroundColor: "#f4c17f",
                      fontFamily: "Open-Dyslexic",
                      color: "#6c3428",
                      marginTop: 10,
                    }}
                    variant="contained"
                    onClick={() => {
                      console.log("Get another recipe");
                    }}
                  >
                    YES I LIKE THIS<CaretRightFill></CaretRightFill>
                  </Button>
                </Link>
                <Link to="/">
                  <Button
                    style={{
                      borderRadius: 20,
                      borderColor: "#6c3428",
                      fontFamily: "Open-Dyslexic",
                      color: "#6c3428",
                      marginTop: 10,
                      maxWidth: 250,
                    }}
                    variant="outlined"
                    onClick={() => {
                      console.log("Get another recipe");
                    }}
                  >
                    <CaretLeftFill></CaretLeftFill>Noooo, I want to go back and try again.
                  </Button>
                </Link>
              </div>
            )
          }

        </div>
      </div>
    </>
  );
}
export default SuggestedRecipe;
