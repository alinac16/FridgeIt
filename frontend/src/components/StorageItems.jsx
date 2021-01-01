import React from "react";
import { List, ListItem } from "react-onsenui";

const example = ["happy", "sad"];
function StorageItems() {
  return (
    <List
      dataSource={example}
      renderRow={(row, idx) => <ListItem key={row}>{row}</ListItem>}
    ></List>
  );
}

export default StorageItems;
