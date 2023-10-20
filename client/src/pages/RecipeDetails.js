import React from "react";
import LogInPrompt from "../components/LogInPrompt";
import { PassageAuthGuard } from "@passageidentity/passage-react";
import { usePassageUserInfo } from "../hooks/";
import axios from "axios";

function RecipeDetails() {
  const { userInfo, loading } = usePassageUserInfo();

  const handleSaveRecipeClick = () => {
    if (userInfo) {
      console.log("userInfo: ", userInfo);
      let data = {
        user_id: userInfo["id"],
        recipe_id: "42",
        title: "new recipe",
        image: "www.foo.com",
      };

      axios
        .post("/save_recipe", data)
        .then((response) => {
          console.log(data)
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

  return (
    <>
      <h1>Recipe Details</h1>
      <LogInPrompt />
      <div onClick={handleSaveRecipeClick}>Save this to My Recipes</div>
      Image goes here
      <img src="" />
      <p>description</p>
      <h4>ingredients list</h4>
      <ul>
        <li>thing</li>
        <li>thing</li>
        <li>thing</li>
        <li>thing</li>
      </ul>
      <p>instructions</p>
      <p>Hmmmm, this isn't really what I'm looking for</p>
      <button>Let me choose another recipe</button>
    </>
  );
}

export default RecipeDetails;
