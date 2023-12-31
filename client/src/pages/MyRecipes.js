import { PassageAuthGuard } from "@passageidentity/passage-react";
import { usePassageUserInfo } from "../hooks/";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";

function MySavedRecipes() {
  const { userInfo, loading } = usePassageUserInfo();
  const [myRecipes, setMyRecipes] = useState([]);

  useEffect(() => {
    if (userInfo) {
      axios
        .get(`recipe-by-user-id/${userInfo["id"]}`)
        .then((response) => {
          setMyRecipes(response.data);
        })
        .catch((error) => {
          console.log("Here's your error: ", error);
        });
    }
  }, [userInfo]);

  if (loading) {
    return (
      <div>
        <div>Loading</div>
      </div>
    );
  } else {
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
          <h1 style={{ color: "#6C3428", textAlign: "center" }}>
            My Saved Recipes
          </h1>
          {myRecipes.length > 0 ? (
            <div>
              <ul style={{ listStyle: "none" }}>
                {myRecipes.map((item, index) => (
                  <Link to={`/recipe-details/${item.recipe_id}`} style={{textDecoration: 'none'}}>
                    <li key={index}>
                      {RecipeCard(item.recipe_id, item.title, item.image)}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          ) : (
            <div>You have no recipes to show.</div>
          )}
        </div>
      </PassageAuthGuard>
    );
  }
}

export default MySavedRecipes;
