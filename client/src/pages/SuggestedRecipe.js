import { React, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CaretLeftFill, CaretRightFill } from "react-bootstrap-icons";
import SlotMachineD from "../components/SlotMachine/SlotMachineD";
import { Button } from "@mui/material";
import JSConfetti from "js-confetti";
import axios from "axios";
import { useMyContext } from "../components/MyContext";
//set global variable GlobalRecipeID as selected recipeID when navigating to recipedetails page - GlobalRecipeID used in navbar to allow recipedetails to populate by last accessed recipeID
import LargeParagraph from "../components/LargeParagraph";

const SPOON_API_KEY = "211a5be1593a4998b32368d3b3517ac6";
const SPOON_API_URL = "https://api.spoonacular.com";

function SuggestedRecipe() {
  const [loading, setLoading] = useState(true);

  const { recipeId } = useParams();
  const [recipeInfo, setRecipeInfo] = useState([]);
  const { GlobalRecipeID, setGlobalRecipeID } = useMyContext();
  setGlobalRecipeID(recipeId);
  console.log(`pp equal to recipeId from useParams ${GlobalRecipeID}`);

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
    setLoading(false);
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
                <img src={recipeInfo.image} style={{ maxHeight: "100%" }} />
              </div>
              <div className="card-details-container">
                <h2 className="text-center">{recipeInfo.title}</h2>

                <ul className="ingredients">
                  {recipeInfo.extendedIngredients.map((ingredient, index) => (
                    <li className="ingredient" key={index}>
                      {ingredient.name}
                    </li>
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
                <LargeParagraph text={recipeInfo.summary} />
              </div>
            </div>

            <div className="suggested-btns">
              <Link to={`/recipe-details/${recipeId}`}>
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
                    const jsConfetti = new JSConfetti();
                    jsConfetti.addConfetti({
                      emojis: ["🥕", "🌽", "🍇", "🍅", "🍒", "🍐"],
                      emojiSize: 50,
                      confettiRadius: 8,
                      confettiNumber: 400,
                    });

                    jsConfetti.addConfetti();
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
                  <CaretLeftFill></CaretLeftFill>Noooo, I want to go back and
                  try again.
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <SlotMachineD />;
  }
}
export default SuggestedRecipe;
