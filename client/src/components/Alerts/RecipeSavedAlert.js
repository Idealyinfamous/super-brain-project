import React from "react";
import Alert from "@mui/material/Alert";
import { Link } from "react-router-dom";

function LogInPrompt({ closeAlert }) {
  return (
    <>
      <Alert severity="success" onClose={closeAlert}>
        This recipe has been saved!
        </Alert>
    </>
  );
}

export default LogInPrompt;
