import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function Tags() {
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

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const ingredients = [
  { name: 'butter' },
  { name: 'milk' },
  { name: 'lentils' },
  { name: 'eggs' },
  { name: 'summer squash' },
  { name: 'heirloom tomato' },
  { name: 'hot dogs' },
  { name: 'corn tortillas' },
  { name: 'salsa' },
  { name: 'garlic' },
  { name: 'onion' },
];
