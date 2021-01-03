import React from "react";
import { ListItem, Button } from "react-onsenui";
import formatDate from "../helper";
import { useItems } from "../App";

function StorageItem({ item }) {
  const { removeItem } = useItems();
  function handleRemove() {
    removeItem(item.id);
  }
  console.log(item);
  return (
    <ListItem>
      <div>
        {item.name}
        {item.weight}
        {formatDate(item.dateStored)}
      </div>
      <Button onClick={handleRemove}>Remove</Button>
    </ListItem>
  );
}

export default StorageItem;
