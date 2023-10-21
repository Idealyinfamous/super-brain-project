import { React, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { usePassageUserInfo } from "../hooks/";
import { PlusCircle, CaretLeftFill } from "react-bootstrap-icons";
import Button from "@mui/material/Button";
import axios from "axios";

const SPOON_API_KEY = "a96058abd5a1493b811ccd7bf0e449f9";
const SPOON_API_URL = "https://api.spoonacular.com";

function RecipeDetails() {
  const { userInfo, loading } = usePassageUserInfo();
  const { recipeId } = useParams();
  const [recipeInfo, setRecipeInfo] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `${SPOON_API_URL}/recipes/${recipeId}/information?includeNutrition=false&apiKey=${SPOON_API_KEY}`
  //     )
  //     .then((response) => {
  //       setRecipeInfo(response.data);
  //       console.log(response.data.analyzedInstructions)
  //     })
  //     .catch((error) => {
  //       console.log("There was an error and here it is: ", error);
  //     });
  // }, []);


  setRecipeInfo({
    vegetarian: true,
    vegan: true,
    glutenFree: true,
    dairyFree: true,
    veryHealthy: false,
    cheap: false,
    veryPopular: false,
    sustainable: false,
    lowFodmap: false,
    weightWatcherSmartPoints: 8,
    gaps: "no",
    preparationMinutes: -1,
    cookingMinutes: -1,
    aggregateLikes: 1,
    healthScore: 2,
    creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    license: "CC BY 3.0",
    sourceName: "Foodista",
    pricePerServing: 39.72,
    extendedIngredients: [
      {
        id: 19912,
        aisle: "Ethnic Foods",
        image: "agave.png",
        consistency: "LIQUID",
        name: "agave nectar",
        nameClean: "agave",
        original: "1 cup Agave Nectar",
        originalName: "Agave Nectar",
        amount: 1.0,
        unit: "cup",
        meta: [],
        measures: {
          us: {
            amount: 1.0,
            unitShort: "cup",
            unitLong: "cup",
          },
          metric: {
            amount: 220.0,
            unitShort: "ml",
            unitLong: "milliliters",
          },
        },
      },
      {
        id: 12061,
        aisle: "Nuts",
        image: "almonds.jpg",
        consistency: "SOLID",
        name: "almonds",
        nameClean: "almonds",
        original: "1 1/2 cups Raw Almonds",
        originalName: "Raw Almonds",
        amount: 1.5,
        unit: "cups",
        meta: ["raw"],
        measures: {
          us: {
            amount: 1.5,
            unitShort: "cups",
            unitLong: "cups",
          },
          metric: {
            amount: 214.5,
            unitShort: "g",
            unitLong: "grams",
          },
        },
      },
      {
        id: 4047,
        aisle: "Baking",
        image: "oil-coconut.jpg",
        consistency: "LIQUID",
        name: "coconut oil",
        nameClean: "coconut oil",
        original: "1/4 cup Coconut Oil",
        originalName: "Coconut Oil",
        amount: 0.25,
        unit: "cup",
        meta: [],
        measures: {
          us: {
            amount: 0.25,
            unitShort: "cups",
            unitLong: "cups",
          },
          metric: {
            amount: 54.5,
            unitShort: "ml",
            unitLong: "milliliters",
          },
        },
      },
      {
        id: 10012108,
        aisle: "Baking",
        image: "shredded-coconut.jpg",
        consistency: "SOLID",
        name: "coconut",
        nameClean: "unsweetened shredded coconut",
        original: "3 cups Shredded unsweetened Coconut",
        originalName: "Shredded unsweetened Coconut",
        amount: 3.0,
        unit: "cups",
        meta: ["shredded", "unsweetened"],
        measures: {
          us: {
            amount: 3.0,
            unitShort: "cups",
            unitLong: "cups",
          },
          metric: {
            amount: 279.0,
            unitShort: "g",
            unitLong: "grams",
          },
        },
      },
      {
        id: 2050,
        aisle: "Baking",
        image: "vanilla-extract.jpg",
        consistency: "LIQUID",
        name: "vanilla extract vanilla bean",
        nameClean: "vanilla extract",
        original:
          "1 teaspoon vanilla extract or one vanilla bean, pods extracted",
        originalName: "vanilla extract vanilla bean, pods extracted",
        amount: 1.0,
        unit: "teaspoon",
        meta: [],
        measures: {
          us: {
            amount: 1.0,
            unitShort: "tsp",
            unitLong: "teaspoon",
          },
          metric: {
            amount: 1.0,
            unitShort: "tsp",
            unitLong: "teaspoon",
          },
        },
      },
    ],
    id: 639715,
    title: "Coconut Almond Macaroons",
    readyInMinutes: 75,
    servings: 24,
    sourceUrl:
      "http://www.foodista.com/recipe/SDN34RTK/coconut-almond-macaroons",
    image: "https://spoonacular.com/recipeImages/639715-556x370.jpg",
    imageType: "jpg",
    summary:
      'Need a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan dessert</b>? Coconut Almond Macaroons could be an outstanding recipe to try. One portion of this dish contains roughly <b>3g of protein</b>, <b>14g of fat</b>, and a total of <b>176 calories</b>. For <b>40 cents per serving</b>, this recipe <b>covers 5%</b> of your daily requirements of vitamins and minerals. This recipe serves 24. 1 person were glad they tried this recipe. This recipe from Foodista requires agave nectar, almonds, coconut oil, and coconut. From preparation to the plate, this recipe takes around <b>1 hour and 15 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 24%</b>. This score is rather bad. Similar recipes include <a href="https://spoonacular.com/recipes/coconut-almond-macaroons-491321">Coconut-Almond Macaroons</a>, <a href="https://spoonacular.com/recipes/almond-coconut-macaroons-902544">Almond Coconut Macaroons</a>, and <a href="https://spoonacular.com/recipes/coconut-almond-macaroons-340188">Coconut-Almond Macaroons</a>.',
    cuisines: [],
    dishTypes: ["dessert"],
    diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
    occasions: [],
    winePairing: {
      pairedWines: ["cream sherry", "port", "moscato dasti"],
      pairingText:
        "Macaroons on the menu? Try pairing with Cream Sherry, Port, and Moscato d'Asti. A common wine pairing rule is to make sure your wine is sweeter than your food. Delicate desserts go well with Moscato d'Asti, nutty desserts with cream sherry, and caramel or chocolate desserts pair well with port. The NV Johnson Estate Cream Sherry with a 5 out of 5 star rating seems like a good match. It costs about 19 dollars per bottle.",
      productMatches: [
        {
          id: 430626,
          title: "NV Johnson Estate Cream Sherry",
          description:
            'Very aromatic with notes of hazelnut, vanilla, and a touch of oak followed by sweet raisins and a touch of yeast. Clean lasting finish. Good now but will reward those allow it to age"". A favorite pre-prandial beverage. Consider it with nuts before dinner as an aperitif, or after dinner with dessert, especially chocolates and fruit-based desserts. Also wonderful on cold afternoons, served with biscotti to dip in ""Italian-style"". "',
          price: "$19.489999771118164",
          imageUrl: "https://spoonacular.com/productImages/430626-312x231.jpg",
          averageRating: 1.0,
          ratingCount: 2.0,
          score: 0.8571428571428572,
          link: "https://www.amazon.com/Johnson-Estate-Cream-Sherry-750/dp/B00D3GQSRW?tag=spoonacular-20",
        },
      ],
    },
    instructions:
      "<ol><li>Pulse the almonds in a food processor until broken down and only some medium size pieces remain. Transfer this mixture to a large bowl and add all remaining ingredients. Stir with a wooden spoon or strong rubber spatula. Get in there with your hands and mash it all together.--This is actually AMAZING for your hands, they will feel super soft, like you just had a manicure, if you get them in there and mix using them. Coconut oil is wonderful for the skin too. So go for it!</li><li>Form large golf ball sized macaroons with a tablespoon and your hands, transfer macaroons to a baking sheet lined with parchment paper. Wrap with plastic wrap and refrigerate for at least 1 hour prior to serving. You may also wrap individual macaroons in an airtight container and freeze - simply thaw out before serving.</li></ol>",
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Pulse the almonds in a food processor until broken down and only some medium size pieces remain.",
            ingredients: [
              {
                id: 12061,
                name: "almonds",
                localizedName: "almonds",
                image: "almonds.jpg",
              },
            ],
            equipment: [
              {
                id: 404771,
                name: "food processor",
                localizedName: "food processor",
                image: "food-processor.png",
              },
            ],
          },
          {
            number: 2,
            step: "Transfer this mixture to a large bowl and add all remaining ingredients. Stir with a wooden spoon or strong rubber spatula. Get in there with your hands and mash it all together.--This is actually AMAZING for your hands, they will feel super soft, like you just had a manicure, if you get them in there and mix using them. Coconut oil is wonderful for the skin too. So go for it!Form large golf ball sized macaroons with a tablespoon and your hands, transfer macaroons to a baking sheet lined with parchment paper. Wrap with plastic wrap and refrigerate for at least 1 hour prior to serving. You may also wrap individual macaroons in an airtight container and freeze - simply thaw out before serving.",
            ingredients: [
              {
                id: 4047,
                name: "coconut oil",
                localizedName: "coconut oil",
                image: "oil-coconut.jpg",
              },
              {
                id: 10018364,
                name: "wrap",
                localizedName: "wrap",
                image: "flour-tortilla.jpg",
              },
            ],
            equipment: [
              {
                id: 404770,
                name: "baking paper",
                localizedName: "baking paper",
                image: "baking-paper.jpg",
              },
              {
                id: 404727,
                name: "baking sheet",
                localizedName: "baking sheet",
                image: "baking-sheet.jpg",
              },
              {
                id: 404730,
                name: "plastic wrap",
                localizedName: "plastic wrap",
                image: "plastic-wrap.jpg",
              },
              {
                id: 404732,
                name: "wooden spoon",
                localizedName: "wooden spoon",
                image: "wooden-spoon.jpg",
              },
              {
                id: 404642,
                name: "spatula",
                localizedName: "spatula",
                image: "spatula-or-turner.jpg",
              },
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
            length: {
              number: 60,
              unit: "minutes",
            },
          },
        ],
      },
    ],
  });

  const handleSaveRecipeClick = () => {
    if (userInfo) {
      let data = {
        user_id: userInfo["id"],
        recipe_id: recipeId,
        title: recipeInfo.title,
        image: recipeInfo.image,
      };

      axios
        .post("/save_recipe", data)
        .then((response) => {
          console.log("Response data:", response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      console.log("should be logged out");
      // TODO show please log in messaging
    }
  };

  document.body.style.backgroundColor = "#97bfd1";

  if (recipeInfo) {
    return (
      <>
        <div id="recipe-details-section">
          <div className="details">
            <div className="img-container">
              <img src={recipeInfo.image} />
            </div>
            <p className="text-center icon">
              <PlusCircle onClick={handleSaveRecipeClick} />
            </p>
            <h1 className="text-center">{recipeInfo.title}</h1>
            <div className="recipe-details-content">
              <h3>Description</h3>
              <p dangerouslySetInnerHTML={{ __html: recipeInfo.summary }} />

              { recipeInfo && recipeInfo.extendedIngredients && recipeInfo.analyzedInstructions ?
                (
                <>
                  <div className="ingredients-section">
                  <h4>ingredients list</h4>
                  <ul>
                      {recipeInfo.extendedIngredients.map(
                          (ingredient, index) => (
                            <li key={index}>
                              {ingredient.measures.us.amount}{" "}
                              {ingredient.measures.us.unitLong} {ingredient.name}
                            </li>
                          )
                        )}
                  </ul>
                </div>

                <h3>Instructions</h3>
                <ul>
                    {recipeInfo.analyzedInstructions[0].steps.map((step) => (
                      <li key={step.number}>
                        Step {step.number}: {step.step}
                      </li>
                  ))}
                                </ul>


                  </>

                ) : (
                  <li>No instructions available</li>
                )}
              ) : ("Nope")

            </div>
          </div>
        </div>
      </>
    );
  } else {
    return;
  }
}

export default RecipeDetails;
