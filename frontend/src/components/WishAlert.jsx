import React, { useState } from "react";
import { AlertDialog, Button } from "react-onsenui";

function WishAlert(alert, handleCancel) {
  return (
    // alert for empty input
    <AlertDialog isOpen={alert} onCancel={handleCancel} cancelable>
      <div className="alert-dialog-title">Warning!</div>
      <div className="alert-dialog-content">An error has occurred!</div>
      <div className="alert-dialog-footer">
        <Button onClick={handleCancel} className="alert-dialog-button">
          Cancel
        </Button>
        <Button onClick={handleCancel} className="alert-dialog-button">
          Ok
        </Button>
      </div>
    </AlertDialog>

    // alert for repeated items
  );
}

export default WishAlert;
