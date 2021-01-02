import React from "react";
import { List } from "react-onsenui";
import WishItem from "./WishItem";

function WishItems({ items, removeItem, toggleComplete }) {
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
