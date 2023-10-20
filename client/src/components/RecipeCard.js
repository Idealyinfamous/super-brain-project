import * as  React from 'react'
import { styled } from '@mui/material/styles';
import { Paper, Grid, Container, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

import JSConfetti from 'js-confetti'

function RecipeCard() {
  return (
    <>
      <h1>My Recipes</h1>
      <Container fixed >
        <Card elevation={12}
          sx={{ border: "1px solid #F4C17F", borderRadius: 5, backgroundColor: "#6BA0B2", padding: 2 }}
          onClick={() => {
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
              <CardMedia sx={{ backgroundColor: "#6BA0B2", border: "1px solid #F4C17F", borderRadius: 5 }}
                component="img"
                alt="Farfalle with Shrimps, Tomatoes Basil Sauce"
                height="140"
                image="https://spoonacular.com/recipeImages/642594-312x231.jpg"
              />
            </Grid>
            <Grid item xs={6} md={8}>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#6C3428" }}>
                  Farfalle with Shrimps, Tomatoes Basil Sauce
                </Typography>
              </CardContent>

            </Grid>
          </Grid>
        </Card>
      </Container>

    </>
  )
}

//https://mui.com/material-ui/react-button/
//https://www.npmjs.com/package/js-confetti

//npm install js-confetti

export default RecipeCard


