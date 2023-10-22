import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./SlotMachine.scss";
import foodstrip from "./foodstrip.png";
import "./slotMachineFunctionality.js";
import {useState, useEffect} from 'react';

export default function SlotMachineD() {
  const [open, setOpen] = useState(false);

  useEffect(()=>{
    setOpen(true);
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="slotmachine-container">
      <div>
        
          <div className="slots">
            <div className="reel"></div>
            <div className="reel"></div>
            <div className="reel"></div>
          </div>
        
        </div>

    </div>
  );
}
