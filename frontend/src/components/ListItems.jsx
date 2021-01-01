import React from "react";
import { List, ListItem, Button, Checkbox } from "react-onsenui";


function ListItems() {
  return (
    <List
      dataSource={["Row 1", "Row 2"]}
      renderRow={(row, idx) => (
        <ListItem modifier={idx === 1 ? "longdivider" : null}>
          <Checkbox />
          {row}
          <Button modifier="quiet">Remove</Button>
        </ListItem>
      )}
    />
  );
}

export default ListItems;

key={item.id}
        item={item}
        removeItem={removeItem}
        toggleCOmplete={toddleComplete}
