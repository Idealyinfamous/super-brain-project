import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PassageProvider } from "@passageidentity/passage-react";

import HomePage from "./pages/HomePage";
import SuggestedRecipe from "./pages/SuggestedRecipe";
import RecipeDetails from "./pages/RecipeDetails";
import MyRecipes from "./pages/MyRecipes";
import Passage from "./components/PassageRegisterOrLogin";
import NavBar from "./components/NavBar";
import { MyContextProvider } from './components/MyContext'; // Import the context provider - context provider wrapper allows use of the global variable in MyContext to be used across all components


const App = () => {
  return (
    <MyContextProvider>
    <PassageProvider appId={"1rXH3X8YmXW5rDsymCChlH9J"}>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="register-or-login" element={<Passage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="suggested-recipe/:recipeId" element={<SuggestedRecipe />} />
          <Route path="recipe-details/:recipeId" element={<RecipeDetails />} />
          <Route path="my-saved-recipes" element={<MyRecipes />} />
        </Routes>
      </Router>
    </PassageProvider>
    </MyContextProvider>
  );
};

export default App;
