import React, { useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Link} from 'react-router-dom';

import axios from "axios";
import JSConfetti from 'js-confetti';

const IngredientsForm = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [submittedOptions, setSubmittedOptions] = useState([]);

  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    axios
      .get("/ingredients")
      .then((response) => {
        setIngredients(response.data);
      })
      .catch((error) => {
        console.log("Here's your error: ", error);
      });
  }, []);

  const handleSubmit = () => {
    // TODO use these ingredients to get recipe from spoontacular API
    if (selectedOptions.length > 0) {
      setSubmittedOptions(selectedOptions);
    }
  };

  // TODO fix unique key error
  return (
    <div>
      <form>
        <Autocomplete
          multiple
          options={ingredients}
          getOptionLabel={(option) => option.name}
          value={selectedOptions}
          onChange={(event, newValue) => setSelectedOptions(newValue)}
          renderInput={(params) => (
            <TextField {...params} label="Select ingredients" />
          )}
        />
        <br />
        
        {/*
        Do you want this button to take you to suggested recipe?
        Is that where the slot-machine will be?
         <Link to = "/suggested-recipe"> 
         */}
        <Button variant="contained" color="primary"
        onClick={() => {
          const jsConfetti = new JSConfetti();
          jsConfetti.addConfetti({
            emojis: ["🥕", "🌽", "🍇", "🍅", "🍒", "🍐"],
            emojiSize: 50,
            confettiRadius: 8,
            confettiNumber: 400,

          });

          jsConfetti.addConfetti();
          handleSubmit();
        }}>
                  Let's gooooooooo
        </Button>
        {/* </Link> */}
      </form>
      {submittedOptions.length > 0 && (
        <div>
          <p>You submitted:</p>
          <ul>
            {submittedOptions.map((option) => (
              <li key={option.id}>
                {option.id} {option.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default IngredientsForm;
