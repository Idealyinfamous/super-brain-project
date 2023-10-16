import { useState, useEffect } from "react";
import { PassageUser } from '@passageidentity/passage-elements/passage-user';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SuggestedRecipe from "./pages/SuggestedRecipe";
import RecipeDetails from "./pages/RecipeDetails";
import MyRecipes from "./pages/MyRecipes";
import PassagePage from "./pages/PassagePage";
import NavBar from "./components/NavBar";

const App = () => {

  return (
    <Router>
      {/* <NavBar/> */}
      <Routes>
        <Route path="register-or-login" element={<PassagePage/>} />
        <Route path="/" element={<HomePage />}/>
        <Route path="suggested-recipe" element={<SuggestedRecipe />}/>
        <Route path="recipe-details" element={<RecipeDetails />}/>
        <Route path="my-recipes" element={<MyRecipes />}/>
      </Routes>
    </Router>
  );
};

export default App;