import { PassageAuthGuard } from "@passageidentity/passage-react";
import { usePassageUserInfo } from "../hooks/";
import LogOutButton from "../components/LogOutButton";
import axios from "axios";
import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";


const recipez=[{recipe_id:"642594",title:'Farfalle with Shrimps, Tomatoes Basil Sauce',image: 'https://spoonacular.com/recipeImages/642594-312x231.jpg'},{recipe_id:"642585",title:"Farfalle with fresh tomatoes, basil and mozzarella",image:"https://spoonacular.com/recipeImages/642585-312x231.jpg"},{recipe_id:"655601",title:"Penne with Sausage, Tomatoes and Potatoes",image:"https://spoonacular.com/recipeImages/655601-312x231.jpg"}]


function Dashboard() {
  const { userInfo, loading } = usePassageUserInfo();
  const { myRecipes, setMyRecipes } = useState([]);

  useEffect(() => {
    axios
      .get(`my_recipes`)
      .then((response) => {
        console.log(response);
        setMyRecipes(response.data);
      })
      .catch((error) => {
        console.log("Here's your error: ", error);
      });
  }, [userInfo]);

  if (loading) {
    return (
      <div>
        <div>Loading</div>
      </div>
    );
  }

  return (
    <PassageAuthGuard
      unAuthComp={
        <div>
          <a href="/register-or-login">
            You must log in or create an account to view this page.
          </a>
        </div>
      }
    >

      
      <div>
        <h1 style={{color: '#6C3428', textAlign:"center"}}>My Saved Recipes
        </h1>
        <div>
          <ul style = {{listStyle: 'none'}} >
            {recipez.map((item,index) =>(
              <li key={index}>{RecipeCard(item.recipe_id,item.title,item.image)}</li>
            ))}

          </ul>
        </div>
      </div>
    </PassageAuthGuard>
  );
}

export default Dashboard;
