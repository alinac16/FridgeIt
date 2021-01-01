import React from "react";
import { List, ListItem, Button, Checkbox } from "react-onsenui";

function WishItems(items, removeItem, toggleComplete) {
  return (
    <List
      dataSource={items}
      renderRow={(row, idx) => (
        <ListItem modifier={idx === 1 ? "longdivider" : null}>
          <Checkbox />
          <Button modifier="quiet">Remove</Button>
        </ListItem>
      )}
    />
  );
}

export default WishItems;
