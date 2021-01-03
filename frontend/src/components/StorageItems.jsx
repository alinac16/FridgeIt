import React from "react";
import { List } from "react-onsenui";
import { useItems } from "../App";
import StorageItem from "./StorageItem";

function StorageItems() {
  const { items, removeItem } = useItems();
  return (
    <List>
      {items
        .filter(item => item.bought)
        .map(item => (
          <StorageItem key={item.id} item={item} removeItem={removeItem} />
        ))}
    </List>
  );
}

export default StorageItems;
