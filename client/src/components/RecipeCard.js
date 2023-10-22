import * as  React from 'react'
import { styled } from '@mui/material/styles';
import { Paper, Grid, Container, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import {Link } from "react-router-dom";
import JSConfetti from 'js-confetti'
import { useMyContext } from '../components/MyContext';
//set global variable GlobalRecipeID as selected recipeID when navigating to recipedetails page - GlobalRecipeID used in navbar to allow recipedetails to populate by last accessed recipeID


function RecipeCard(recipe_id,title,image) {
  const { GlobalRecipeID, setGlobalRecipeID } = useMyContext();
  console.log(`initial GlobalRecipeID ${GlobalRecipeID}`)
  return (
    <>
      <Container fixed >
      <Link to={`../recipe-details/${recipe_id}`}>
        <Card elevation={12}
          sx={{ border: "1px solid #F4C17F", borderRadius: 5, 
          // backgroundColor: "#6BA0B2", 
          padding: 2, margin: 4 }}
          onClick={() => {
            setGlobalRecipeID(recipe_id)
            console.log(`pp equal to recipeId from useParams ${GlobalRecipeID}`)
          
            const jsConfetti = new JSConfetti();
            jsConfetti.addConfetti({
              emojis: ["🥕", "🌽", "🍇", "🍅", "🍒", "🍐"],
              emojiSize: 50,
              confettiRadius: 8,
              confettiNumber: 400,
              
            });

            jsConfetti.addConfetti();
          }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={4}>
              <CardMedia sx={{ 
                // backgroundColor: "#6BA0B2", 
                border: "1px solid #F4C17F", borderRadius: 5 }}
                component="img"
                alt= {title}
                height="140"
                image={image}
              />
            </Grid>
            <Grid item xs={6} md={8}>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#6C3428" }}>
                  {title}
                </Typography>
              </CardContent>

            </Grid>
          </Grid>
        </Card>
        </Link>
      </Container>

    </>
  )
}

//https://mui.com/material-ui/react-button/
//https://www.npmjs.com/package/js-confetti

//npm install js-confetti

export default RecipeCard


