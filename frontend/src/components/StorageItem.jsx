import React from "react";
import { ListItem, Button } from "react-onsenui";

function StorageItem({ key, item, removeItem }) {
  function handleRemove() {
    removeItem(key);
  }
  console.log(item);
  return (
    <ListItem>
      <div>
        {item.name}
        {item.weight}
        {item.dateStored}
      </div>
      <Button onClick={handleRemove}>Remove</Button>
    </ListItem>
  );
}

export default StorageItem;
