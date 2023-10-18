import React from 'react'
import Button from '@mui/material/Button'
import JSConfetti from 'js-confetti'



//added temporary button to try out confetti function


function SuggestedRecipe() {
  return (
    <>
    <div>SuggestedRecipe</div>
    <Button variant = 'contained' size = 'medium' color = 'success' onClick ={()=> {  
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti({
      emojis: ["🥕","🌽","🍇","🍅","🍒","🍐"],
      emojiSize: 50,
      confettiRadius: 8,
      confettiNumber: 400,
    
      });

      jsConfetti.addConfetti();
  }}>confetti!</Button>
    </>
  )
}

//https://mui.com/material-ui/react-button/
//https://www.npmjs.com/package/js-confetti

//npm install js-confetti

export default SuggestedRecipe


// function recipeChosen() {
//   const jsConfetti = new JSConfetti();

//   jsConfetti.addConfetti({
//     emojis: ["🚗", "✨", "💫", "🌸", "🐈","🍗", "🥕","🌽","🥩"],
//     confettiRadius: 8,
//     confettiNumber: 400,
//   });

//   jsConfetti.addConfetti();
// }