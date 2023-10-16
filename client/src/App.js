import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SuggestedRecipe from "./pages/SuggestedRecipe";
import RecipeDetails from "./pages/RecipeDetails";
import MyRecipes from "./pages/MyRecipes";
import PassagePage from "./pages/PassagePage";

const App = () => {
  return (
    <Router>
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