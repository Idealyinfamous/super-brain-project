import React, { useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import { CaretRightFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import JSConfetti from "js-confetti";

const SPOON_API_KEY = "211a5be1593a4998b32368d3b3517ac6";
const SPOON_API_URL = "https://api.spoonacular.com";

const slugify = (ingredientName) => {
  return ingredientName
    .toString() // Convert to string in case it's not
    .toLowerCase() // Convert to lowercase
    .normalize("NFD") // Normalize special characters
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks
    .trim() // Trim leading/trailing white space
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/&/g, "-and-") // Replace & with '-and-'
    .replace(/[^a-z0-9-]/g, "") // Remove any non-word characters
    .replace(/-+/g, "-") // Remove consecutive hyphens
    .replace(/^-+/, "") // Remove leading hyphens
    .replace(/-+$/, ""); // Remove trailing hyphens
};

const IngredientsForm = () => {
  const navigate = useNavigate();
  const [ingredients, setIngredients] = useState([]); // this is populated by data from our own backend

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [submittedOptions, setSubmittedOptions] = useState([]);
  const [recipeId, setRecipeId] = useState(null);
  const [repipeApiError, setRecipeApiError] = useState(false);

  useEffect(() => {
    axios
      .get("/ingredients")
      .then((response) => {
        setIngredients(response.data);
      })
      .catch((error) => {
        console.log("Here's your error: ", error);
      });
  }, []);

  const handleSubmit = () => {
    if (selectedOptions.length > 0) {
      setSubmittedOptions(selectedOptions);
      getRecipes(selectedOptions);
    }
  };

  const getRecipes = (ingredients) => {
    let slugifiedIngredientList = ingredients.map((ingredient) =>
      slugify(ingredient["name"])
    );
    let slugifiedIngredientString = slugifiedIngredientList.join(",+");

    //generate a random number between 1 and 100 (spoonacular docs  number = The maximum number of recipes to return (between 1 and 100). Defaults to 10. )

    const randomRecipeNumber = Math.floor(Math.random() * 100) + 1;

    let url = `${SPOON_API_URL}/recipes/findByIngredients?apiKey=${SPOON_API_KEY}&number=${randomRecipeNumber}&ranking=1&ingredients=${slugifiedIngredientString}`;
    let headers = { "Content-Type": "application/json" };
    axios
      .get((url = url), (headers = headers))
      .then((response) => {
        // TODO what if it doesn't return a recipe
        navigate(`/suggested-recipe/${response.data[0]["id"]}`);
      })
      .catch((error) => {
        console.log("There was an error and here it is: ", error);
        setRecipeApiError(true);
      });
  };

  return (
    <div className="ingredients-form">
      <form>
        <Autocomplete
          multiple
          options={ingredients}
          getOptionLabel={(option) => option.name}
          value={selectedOptions}
          onChange={(event, newValue) => setSelectedOptions(newValue)}
          renderInput={(params) => (
            <TextField {...params} label="Select ingredients" />
          )}
          limitTags={5} // Set the maximum number of displayed tags
          renderTags={(value, getTagProps) => (
            <div>
              {value.slice(0, 5).map((option, index) => (
                <Chip
                  label={option.name}
                  {...getTagProps({ index })}
                  key={option.id}
                />
              ))}
            </div>
          )}
        />
        <br />
        <Button
          style={{
            borderRadius: 20,
            backgroundColor: "#f4c17f",
            fontFamily: "Open-Dyslexic",
            color: "#6c3428",
            marginTop: 10,
          }}
          variant="contained"
          color="primary"
          onClick={() => {
            const jsConfetti = new JSConfetti();
            jsConfetti.addConfetti({
              emojis: ["🥕", "🌽", "🍇", "🍅", "🍒", "🍐"],
              emojiSize: 50,
              confettiRadius: 8,
              confettiNumber: 400,
            });

            jsConfetti.addConfetti();
            handleSubmit();
          }}
        >
          Get recipe
          <CaretRightFill></CaretRightFill>
        </Button>
      </form>
      {repipeApiError ? (
        <div>There's been a problem. Please try again.</div>
      ) : null}
    </div>
  );
};

export default IngredientsForm;
