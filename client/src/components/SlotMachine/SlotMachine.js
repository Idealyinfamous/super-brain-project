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

export default function SlotMachine() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open slot dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <div className="slots">
            <div className="reel"></div>
            <div className="reel"></div>
            <div className="reel"></div>
          </div>

          <div id="debug" className="debug"></div>

          <img
            src={foodstrip}
            style={{
              position: "fixed",
              left: 0,
              top: 0,
              height: "100vh",
              width: "auto",
            }}
          />
        </DialogContent>

      </Dialog>
    </div>
  );
}
