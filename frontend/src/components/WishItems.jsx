import React from "react";
import { List } from "react-onsenui";
import { useItems } from "../App";
import WishItem from "./WishItem";

function WishItems({ toggleComplete }) {
  const { items, removeItem } = useItems();
  return (
    <List>
      {items.map(item => (
        <WishItem
          key={item.id}
          item={item}
          removeItem={removeItem}
          toggleComplete={toggleComplete}
        />
      ))}
    </List>
  );
}

export default WishItems;
