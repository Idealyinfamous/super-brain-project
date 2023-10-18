import React, { useState, useEffect } from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import axios from "axios";


export default function Tags() {
  const [ingredients, setIngredients] = useState([{}])
  useEffect(() => {
    axios.get("/ingredients")
      .then((response) => {
        setIngredients(response.data)
      })
      .catch((error) => {
        console.log("Here's your error: ", error)
      });
  }, [])

  // TODO fix the non-unique key error
  return (
      <Autocomplete
        multiple
        id="tags-standard"
        options={ingredients}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Choose up to 5 ingredients"
          />
        )}
      />
  );
}

