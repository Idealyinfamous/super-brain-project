import React, { useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import axios from "axios";

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
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Let's gooooooooo
        </Button>
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
