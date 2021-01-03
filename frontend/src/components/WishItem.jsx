import React from "react";
import { ListItem, Button, Checkbox } from "react-onsenui";
import formatDate from "../helper";

function WishItem({ item, toggleComplete, removeItem }) {
  function handleCheckbox() {
    toggleComplete(item.id);
  }

  function handleRemove() {
    removeItem(item.id);
  }

  return (
    <ListItem>
      <Checkbox checked={item.checked} onChange={handleCheckbox} />
      {item.name}
      {item.weight}
      {formatDate(item.dateAdded)}
      <Button modifier="quiet" onClick={handleRemove}>
        Remove
      </Button>
    </ListItem>
  );
}

export default WishItem;
