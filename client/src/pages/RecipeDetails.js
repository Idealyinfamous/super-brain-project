import { React, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { usePassageUserInfo } from "../hooks/";
import { PlusCircle, CaretLeftFill } from "react-bootstrap-icons";
import axios from "axios";
import LogInPrompt from "../components/Alerts/LogInPrompt";
import RecipeSavedAlert from "../components/Alerts/RecipeSavedAlert";

const SPOON_API_KEY = "a96058abd5a1493b811ccd7bf0e449f9";
const SPOON_API_URL = "https://api.spoonacular.com";

function RecipeDetails() {
  const { userInfo, loading } = usePassageUserInfo();
  const [ showAlert, setShowAlert ] = useState(false);
  const [ recipeSavedAlert, setRecipeSavedAlert ] = useState(false);
  const { recipeId } = useParams();
  const [recipeInfo, setRecipeInfo] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${SPOON_API_URL}/recipes/${recipeId}/information?includeNutrition=false&apiKey=${SPOON_API_KEY}`
      )
      .then((response) => {
        setRecipeInfo(response.data);
        console.log(response.data.analyzedInstructions)
      })
      .catch((error) => {
        console.log("There was an error and here it is: ", error);
      });
  }, []);

  const handleSaveRecipeClick = () => {
    if (userInfo) {
      let data = {
        user_id: userInfo["id"],
        recipe_id: recipeId,
        title: recipeInfo.title,
        image: recipeInfo.image,
      };

      axios
        .post("/save_recipe", data)
        .then((response) => {
          console.log("Response data:", response.data);
          setRecipeSavedAlert(true)
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      console.log("should be logged out");
      setShowAlert(true)
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
    setRecipeSavedAlert(false);
  };

  document.body.style.backgroundColor = "#97bfd1";

  if (
    recipeInfo &&
    recipeInfo.extendedIngredients &&
    recipeInfo.analyzedInstructions
  ) {
    return (
      <>
        { showAlert ? (
          <LogInPrompt closeAlert={closeAlert}/>
        ) : null }
        { recipeSavedAlert ? (
          <RecipeSavedAlert closeAlert={closeAlert}/>
        ) : null }
        <div id="recipe-details-section">
          <div className="details">
            <div className="img-container">
              <img src={recipeInfo.image} />
            </div>
            <p className="text-center icon">
              <PlusCircle onClick={handleSaveRecipeClick} />
            </p>
            <h1 className="text-center">{recipeInfo.title}</h1>
            <div className="recipe-details-content">
              <h3>Description</h3>
              <p dangerouslySetInnerHTML={{ __html: recipeInfo.summary }} />

              <div className="ingredients-section">
                <h4>ingredients list</h4>
                <ul>
                  {recipeInfo.extendedIngredients.map((ingredient, index) => (
                    <li key={index}>
                      {ingredient.measures.us.amount}{" "}
                      {ingredient.measures.us.unitLong} {ingredient.name}
                    </li>
                  ))}
                </ul>
              </div>

              <h3>Instructions</h3>
              <ul>
                {recipeInfo.analyzedInstructions[0].steps.map((step) => (
                  <li key={step.number}>
                    Step {step.number}: {step.step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return "not loaded yet";
  }
}

export default RecipeDetails;
