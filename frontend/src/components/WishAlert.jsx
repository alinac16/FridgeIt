import React, { useState } from "react";
import { AlertDialog, Button } from "react-onsenui";

function WishAlert({ alert, handleCancel }) {
  console.log(alert);
  return (
    // alert for repeated items
    <AlertDialog isOpen={alert} onCancel={handleCancel} cancelable>
      <div className="alert-dialog-title">You have this item already</div>
      <div className="alert-dialog-content">
        Consider finishing your food first
      </div>
      <div className="alert-dialog-footer">
        <Button onClick={handleCancel} className="alert-dialog-button">
          Ok
        </Button>
      </div>
    </AlertDialog>
  );
}

export default WishAlert;
