import React from "react";
import { List } from "react-onsenui";
import StorageItem from "./StorageItem";

function StorageItems({ items, removeItem }) {
  return (
    <List>
      {items.map(item => (
        <StorageItem item={item} removeItem={removeItem} />
      ))}
    </List>
  );
}

export default StorageItems;
