
// set global variable that can be used across all components
// GlobalRecipeID is the variable to store the latest recipe accessed on the RecipeDetails page, either through homepage/suggestedrecipes or myrecipes

import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export function MyContextProvider({ children }) {
  const [GlobalRecipeID, setGlobalRecipeID] = useState(0); 
  return (
    <MyContext.Provider value={{ GlobalRecipeID, setGlobalRecipeID }}>
      {children}
    </MyContext.Provider>
  );
}

export function useMyContext() {
  return useContext(MyContext);
}
