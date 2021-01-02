import React from "react";
import { List } from "react-onsenui";
import StorageItem from "./StorageItem";

function StorageItems({ items, removeItem }) {
  return (
    <List>
      {items.map(item => (
        <StorageItem key={item.id} item={item} removeItem={removeItem} />
      ))}
    </List>
  );
}

export default StorageItems;
