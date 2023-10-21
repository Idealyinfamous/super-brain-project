import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PassageProvider } from "@passageidentity/passage-react";

import HomePage from "./pages/HomePage";
import SuggestedRecipe from "./pages/SuggestedRecipe";
import RecipeDetails from "./pages/RecipeDetails";
import MyRecipes from "./pages/MyRecipes";
import Passage from "./components/PassageRegisterOrLogin";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <PassageProvider appId={"1rXH3X8YmXW5rDsymCChlH9J"}>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="register-or-login" element={<Passage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="suggested-recipe/:recipeId" element={<SuggestedRecipe />} />
          <Route path="recipe-details" element={<RecipeDetails />} />
          <Route path="my-saved-recipes" element={<MyRecipes />} />
        </Routes>
      </Router>
    </PassageProvider>
  );
};

export default App;
