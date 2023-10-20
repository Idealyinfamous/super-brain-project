import { PassageAuthGuard } from "@passageidentity/passage-react";
import { usePassageUserInfo } from "../hooks/";
import LogOutButton from "../components/LogOutButton";
import axios from "axios";
import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";

function Dashboard() {
  const { userInfo, loading } = usePassageUserInfo();
  const [ myRecipes, setMyRecipes ] = useState([]);

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
          <div>
            <ul style={{ listStyle: "none" }}>
              {myRecipes.map((item, index) => (
                <li key={index}>
                  {RecipeCard(item.recipe_id, item.title, item.image)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PassageAuthGuard>
    );
  }
}

export default Dashboard;
