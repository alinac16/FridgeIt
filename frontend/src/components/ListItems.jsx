import React from "react";
import { List, ListItem, Button } from "react-onsenui";

function ListItems() {
  return (
    <List
      dataSource={["Row 1", "Row 2"]}
      renderRow={(row, idx) => (
        <ListItem modifier={idx === 1 ? "longdivider" : null}>
          {row}
          <Button modifier="quiet">Remove</Button>
        </ListItem>
      )}
    />
  );
}

export default ListItems;
