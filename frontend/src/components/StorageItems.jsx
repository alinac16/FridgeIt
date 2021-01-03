import React from "react";
import { List } from "react-onsenui";
import { useItems } from "../App";
import StorageItem from "./StorageItem";

function StorageItems({ input }) {
  const { items } = useItems();

  return (
    <List>
      {items
        .filter(item => item.name.toLowerCase().includes(input.toLowerCase()))
        .filter(item => item.dateStored)
        .map(item => (
          <StorageItem item={item} />
        ))}
    </List>
  );
}

export default StorageItems;
