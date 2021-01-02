import React from "react";
import { ListItem, Button } from "react-onsenui";

function StorageItem({ item, removeItem }) {
  function handleRemove() {
    removeItem(item.id);
  }

  return (
    <ListItem>
      {item.name}
      {item.weight}
      {item.dateStored}
      <Button onClick={handleRemove}>Remove</Button>
    </ListItem>
  );
}

export default StorageItem;
