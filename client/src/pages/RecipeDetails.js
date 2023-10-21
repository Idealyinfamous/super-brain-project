import { React, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { PassageAuthGuard } from "@passageidentity/passage-react";
import { usePassageUserInfo } from "../hooks/";
import { PlusCircle, CaretLeftFill } from "react-bootstrap-icons";
import Button from "@mui/material/Button";
import axios from "axios";

const SPOON_API_KEY = "622012b5d9bb4844bda0fe5a12cfd221";
const SPOON_API_URL = "https://api.spoonacular.com";

function RecipeDetails() {
  const { userInfo, loading } = usePassageUserInfo();
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState([]);

  let headers = { "Content-Type": "application/json" };

  useEffect(() => {
    axios
      .get(
        (url = `${SPOON_API_URL}/recipes/${recipeId}/information?includeNutrition=false&apiKey=${SPOON_API_KEY}`),
        (headers = headers)
      )
      .then((response) => {
        console.log(response);
        setRecipe(response.data);
      })
      .catch((error) => {
        console.log("There was an error and here it is: ", error);
      });

    axios
      .get((url = `${SPOON_API_URL}/recipes/${recipeId}/analyzedInstructions&apiKey=${SPOON_API_KEY}`), (headers = headers))
      .then((response) => {
        console.log(response);
        setRecipe(response.data);
      })
      .catch((error) => {
        console.log("There was an error and here it is: ", error);
      });
  }, []);

  const dummyIngredients = ["potato", "onions", "chicken"];

  const handleSaveRecipeClick = () => {
    if (userInfo) {
      let data = {
        user_id: userInfo["id"],
        recipe_id: recipeId,
        title: recipe.title,
        image: recipe.image,
      };

      axios
        .post("/save_recipe", data)
        .then((response) => {
          console.log("Response data:", response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      console.log("should be logged out");
      // TODO show please log in messaging
    }
  };

  document.body.style.backgroundColor = "#97bfd1";

  return (
    <>
      <div id="recipe-details-section">
        <h1 className="text-center">Recipe Name</h1>
        <div className="details">
          <div className="img-container">
            <img src="https://spoonacular.com/recipeImages/73420-312x231.jpg" />
          </div>
          <p className="text-center icon">
            <PlusCircle onClick={handleSaveRecipeClick} />
          </p>
          <div className="recipe-details-content">
            <h3>Description</h3>
            <p>
              LoremImpsum agasgasgjalsgjasfjlsdjfh jlkaghaslkgjasdg
              gjglfjajfaslj
            </p>
            <div className="ingredients-section">
              <h4>ingredients list</h4>
              <ul>
                {dummyIngredients.map((ingredient) => (
                  <li>{ingredient}</li>
                ))}
              </ul>
            </div>

            <h3>Instructions</h3>
            <p>
              sint occaecati cupiditate non provident, similique sunt in culpa
              qui officia deserunt mollitia animi, id est laborum et dolorum
              fuga. Et harum quidem rerum facilis est et expedita distinctio.
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
              autem quibusdam et aut officiis debitis aut rerum necessitatibus
              saepe eveni
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeDetails;
