import { React, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  PlusCircle,
  CaretLeftFill,
  CaretRightFill,
} from "react-bootstrap-icons";
import SlotMachineD from "../components/SlotMachine/SlotMachineD";

import { styled } from "@mui/material/styles";
import {
  Paper,
  Grid,
  Container,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
// import Container from '@mui/material/Container'
// import Button from '@mui/material/Button'
import JSConfetti from "js-confetti";
import axios from "axios";

const SPOON_API_KEY = "a96058abd5a1493b811ccd7bf0e449f9";
const SPOON_API_URL = "https://api.spoonacular.com";

function SuggestedRecipe() {
  const [loading, setLoading] = useState(true);

  const { recipeId } = useParams();
  const [recipeInfo, setRecipeInfo] = useState([]);

  let url = `${SPOON_API_URL}/recipes/${recipeId}/information?includeNutrition=false&apiKey=${SPOON_API_KEY}`;
  let headers = { "Content-Type": "application/json" };

  useEffect(() => {
    setLoading(true);
    // axios
    //   .get((url = url), (headers = headers))
    //   .then((response) => {
    //     console.log(response);
    //     setRecipeInfo(response.data);
    //     setTimeout(() => {
    //       console.log("Time out");
    //       setLoading(false);
    //     }, 6800);
    //   })
    //   .catch((error) => {
    //     console.log("There was an error and here it is: ", error);
    //     setLoading(false);
    //   });
    setRecipeInfo({
      id: 716429,
      title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
      image: "https://spoonacular.com/recipeImages/716429-556x370.jpg",
      imageType: "jpg",
      servings: 2,
      readyInMinutes: 45,
      license: "CC BY-SA 3.0",
      sourceName: "Full Belly Sisters",
      sourceUrl:
        "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
      spoonacularSourceUrl:
        "https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429",
      healthScore: 19.0,
      spoonacularScore: 83.0,
      pricePerServing: 163.15,
      analyzedInstructions: [],
      cheap: false,
      creditsText: "Full Belly Sisters",
      cuisines: [],
      dairyFree: false,
      diets: [],
      gaps: "no",
      glutenFree: false,
      instructions: "",
      ketogenic: false,
      lowFodmap: false,
      occasions: [],
      sustainable: false,
      vegan: false,
      vegetarian: false,
      veryHealthy: false,
      veryPopular: false,
      whole30: false,
      weightWatcherSmartPoints: 17,
      dishTypes: ["lunch", "main course", "main dish", "dinner"],
      extendedIngredients: [
        {
          aisle: "Milk, Eggs, Other Dairy",
          amount: 1.0,
          consitency: "solid",
          id: 1001,
          image: "butter-sliced.jpg",
          measures: {
            metric: {
              amount: 1.0,
              unitLong: "Tbsp",
              unitShort: "Tbsp",
            },
            us: {
              amount: 1.0,
              unitLong: "Tbsp",
              unitShort: "Tbsp",
            },
          },
          meta: [],
          name: "butter",
          original: "1 tbsp butter",
          originalName: "butter",
          unit: "tbsp",
        },
        {
          aisle: "Produce",
          amount: 2.0,
          consitency: "solid",
          id: 10011135,
          image: "cauliflower.jpg",
          measures: {
            metric: {
              amount: 473.176,
              unitLong: "milliliters",
              unitShort: "ml",
            },
            us: {
              amount: 2.0,
              unitLong: "cups",
              unitShort: "cups",
            },
          },
          meta: ["frozen", "thawed", "cut into bite-sized pieces"],
          name: "cauliflower florets",
          original:
            "about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces",
          originalName:
            "about frozen cauliflower florets, thawed, cut into bite-sized pieces",
          unit: "cups",
        },
        {
          aisle: "Cheese",
          amount: 2.0,
          consitency: "solid",
          id: 1041009,
          image: "cheddar-cheese.png",
          measures: {
            metric: {
              amount: 2.0,
              unitLong: "Tbsps",
              unitShort: "Tbsps",
            },
            us: {
              amount: 2.0,
              unitLong: "Tbsps",
              unitShort: "Tbsps",
            },
          },
          meta: ["grated", "(I used romano)"],
          name: "cheese",
          original: "2 tbsp grated cheese (I used romano)",
          originalName: "grated cheese (I used romano)",
          unit: "tbsp",
        },
        {
          aisle: "Oil, Vinegar, Salad Dressing",
          amount: 1.0,
          consitency: "liquid",
          id: 1034053,
          image: "olive-oil.jpg",
          measures: {
            metric: {
              amount: 1.0,
              unitLong: "Tbsp",
              unitShort: "Tbsp",
            },
            us: {
              amount: 1.0,
              unitLong: "Tbsp",
              unitShort: "Tbsp",
            },
          },
          meta: [],
          name: "extra virgin olive oil",
          original: "1-2 tbsp extra virgin olive oil",
          originalName: "extra virgin olive oil",
          unit: "tbsp",
        },
        {
          aisle: "Produce",
          amount: 5.0,
          consitency: "solid",
          id: 11215,
          image: "garlic.jpg",
          measures: {
            metric: {
              amount: 5.0,
              unitLong: "cloves",
              unitShort: "cloves",
            },
            us: {
              amount: 5.0,
              unitLong: "cloves",
              unitShort: "cloves",
            },
          },
          meta: [],
          name: "garlic",
          original: "5-6 cloves garlic",
          originalName: "garlic",
          unit: "cloves",
        },
        {
          aisle: "Pasta and Rice",
          amount: 6.0,
          consitency: "solid",
          id: 20420,
          image: "fusilli.jpg",
          measures: {
            metric: {
              amount: 170.097,
              unitLong: "grams",
              unitShort: "g",
            },
            us: {
              amount: 6.0,
              unitLong: "ounces",
              unitShort: "oz",
            },
          },
          meta: ["(I used linguine)"],
          name: "pasta",
          original: "6-8 ounces pasta (I used linguine)",
          originalName: "pasta (I used linguine)",
          unit: "ounces",
        },
        {
          aisle: "Spices and Seasonings",
          amount: 2.0,
          consitency: "solid",
          id: 1032009,
          image: "red-pepper-flakes.jpg",
          measures: {
            metric: {
              amount: 2.0,
              unitLong: "pinches",
              unitShort: "pinches",
            },
            us: {
              amount: 2.0,
              unitLong: "pinches",
              unitShort: "pinches",
            },
          },
          meta: ["red"],
          name: "red pepper flakes",
          original: "couple of pinches red pepper flakes, optional",
          originalName: "couple of red pepper flakes, optional",
          unit: "pinches",
        },
        {
          aisle: "Spices and Seasonings",
          amount: 2.0,
          consitency: "solid",
          id: 1102047,
          image: "salt-and-pepper.jpg",
          measures: {
            metric: {
              amount: 2.0,
              unitLong: "servings",
              unitShort: "servings",
            },
            us: {
              amount: 2.0,
              unitLong: "servings",
              unitShort: "servings",
            },
          },
          meta: ["to taste"],
          name: "salt and pepper",
          original: "salt and pepper, to taste",
          originalName: "salt and pepper, to taste",
          unit: "servings",
        },
        {
          aisle: "Produce",
          amount: 3.0,
          consitency: "solid",
          id: 11291,
          image: "spring-onions.jpg",
          measures: {
            metric: {
              amount: 3.0,
              unitLong: "",
              unitShort: "",
            },
            us: {
              amount: 3.0,
              unitLong: "",
              unitShort: "",
            },
          },
          meta: ["white", "green", "separated", "chopped"],
          name: "scallions",
          original: "3 scallions, chopped, white and green parts separated",
          originalName: "scallions, chopped, white and green parts separated",
          unit: "",
        },
        {
          aisle: "Alcoholic Beverages",
          amount: 2.0,
          consitency: "liquid",
          id: 14106,
          image: "white-wine.jpg",
          measures: {
            metric: {
              amount: 2.0,
              unitLong: "Tbsps",
              unitShort: "Tbsps",
            },
            us: {
              amount: 2.0,
              unitLong: "Tbsps",
              unitShort: "Tbsps",
            },
          },
          meta: ["white"],
          name: "white wine",
          original: "2-3 tbsp white wine",
          originalName: "white wine",
          unit: "tbsp",
        },
        {
          aisle: "Pasta and Rice",
          amount: 0.25,
          consitency: "solid",
          id: 99025,
          image: "breadcrumbs.jpg",
          measures: {
            metric: {
              amount: 59.147,
              unitLong: "milliliters",
              unitShort: "ml",
            },
            us: {
              amount: 0.25,
              unitLong: "cups",
              unitShort: "cups",
            },
          },
          meta: ["whole wheat", "(I used panko)"],
          name: "whole wheat bread crumbs",
          original: "1/4 cup whole wheat bread crumbs (I used panko)",
          originalName: "whole wheat bread crumbs (I used panko)",
          unit: "cup",
        },
      ],
      summary:
        'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good recipe to expand your main course repertoire. One portion of this dish contains approximately <b>19g of protein </b>,  <b>20g of fat </b>, and a total of  <b>584 calories </b>. For  <b>$1.63 per serving </b>, this recipe  <b>covers 23% </b> of your daily requirements of vitamins and minerals. This recipe serves 2. It is brought to you by fullbellysisters.blogspot.com. 209 people were glad they tried this recipe. A mixture of scallions, salt and pepper, white wine, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes approximately  <b>45 minutes </b>. All things considered, we decided this recipe  <b>deserves a spoonacular score of 83% </b>. This score is awesome. If you like this recipe, take a look at these similar recipes: <a href="https://spoonacular.com/recipes/cauliflower-gratin-with-garlic-breadcrumbs-318375">Cauliflower Gratin with Garlic Breadcrumbs</a>, < href="https://spoonacular.com/recipes/pasta-with-cauliflower-sausage-breadcrumbs-30437">Pasta With Cauliflower, Sausage, & Breadcrumbs</a>, and <a href="https://spoonacular.com/recipes/pasta-with-roasted-cauliflower-parsley-and-breadcrumbs-30738">Pasta With Roasted Cauliflower, Parsley, And Breadcrumbs</a>.',
      winePairing: {
        pairedWines: ["chardonnay", "gruener veltliner", "sauvignon blanc"],
        pairingText:
          "Chardonnay, Gruener Veltliner, and Sauvignon Blanc are great choices for Pasta. Sauvignon Blanc and Gruner Veltliner both have herby notes that complement salads with enough acid to match tart vinaigrettes, while a Chardonnay can be a good pick for creamy salad dressings. The Buddha Kat Winery Chardonnay with a 4 out of 5 star rating seems like a good match. It costs about 25 dollars per bottle.",
        productMatches: [
          {
            id: 469199,
            title: "Buddha Kat Winery Chardonnay",
            description:
              "We barrel ferment our Chardonnay and age it in a mix of Oak and Stainless. Giving this light bodied wine modest oak character, a delicate floral aroma, and a warming finish.",
            price: "$25.0",
            imageUrl:
              "https://spoonacular.com/productImages/469199-312x231.jpg",
            averageRating: 0.8,
            ratingCount: 1.0,
            score: 0.55,
            link: "https://www.amazon.com/2015-Buddha-Kat-Winery-Chardonnay/dp/B00OSAVVM4?tag=spoonacular-20",
          },
        ],
      },
    });
    setLoading(true);
  }, []);

  if (recipeInfo && recipeInfo.extendedIngredients && !loading) {
    return (
      <>
        <div className="wrapper">
          <div>
            <h1 className="text-center">
              Here is your <span className="brown">recipe</span>
            </h1>

            <div className="card card-grid">
              <div className="card-image-container">
                <img src={recipeInfo.image} />
              </div>
              <div className="card-details-container">
                <h2 className="text-center">{recipeInfo.title}</h2>

                <ul>
                  {recipeInfo.extendedIngredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.name}</li>
                  ))}
                </ul>
                <div className="times-container">
                  <div className="text-center">
                    <p>
                      <b>Ready in {recipeInfo.readyInMinutes} minutes</b>
                    </p>
                  </div>
                </div>
                <h3>Description</h3>
                <p dangerouslySetInnerHTML={{ __html: recipeInfo.summary }} />
              </div>
            </div>

            <div className="suggested-btns">
              {/* <Link to={`/recipe-details/${recipeId}`}> */}
              <Link to={`/recipe-details/632075`}>
                <Button
                  style={{
                    borderRadius: 20,
                    backgroundColor: "#f4c17f",
                    fontFamily: "Open-Dyslexic",
                    color: "#6c3428",
                    marginTop: 10,
                  }}
                  variant="contained"
                  onClick={() => {
                    console.log("Get another recipe");
                  }}
                >
                  YES I LIKE THIS<CaretRightFill></CaretRightFill>
                </Button>
              </Link>
              <Link to="/">
                <Button
                  style={{
                    borderRadius: 20,
                    borderColor: "#6c3428",
                    fontFamily: "Open-Dyslexic",
                    color: "#6c3428",
                    marginTop: 10,
                    maxWidth: 250,
                  }}
                  variant="outlined"
                  onClick={() => {
                    console.log("Get another recipe");
                  }}
                >
                  <CaretLeftFill></CaretLeftFill>Noooo, I want to go back and
                  try again.
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <SlotMachineD />;
  }
}
export default SuggestedRecipe;
