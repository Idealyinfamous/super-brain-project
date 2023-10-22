import React from "react";
import Alert from "@mui/material/Alert";
import { Link } from "react-router-dom";

function LogInPrompt({ closeAlert }) {
  return (
    <>
      <Alert severity="info" onClose={closeAlert}>
        You must <Link to={`/register-or-login`}>create an account or log in</Link> to save recipes.
        </Alert>
    </>
  );
}

export default LogInPrompt;
