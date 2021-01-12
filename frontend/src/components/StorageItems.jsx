import React from "react";
import { List } from "react-onsenui";
import StorageItem from "./StorageItem";

function StorageItems({ items, input }) {
  return (
    <List>
      {items.map(item => (
        <StorageItem item={item} />
      ))}
    </List>
  );
}

export default StorageItems;
