import React from "react";
import { List, ListItem } from "react-onsenui";

const example = ["apples", "oranges"];
function ListItems({ title, active, tabbar }) {
  return (
    <List
      dataSource={example}
      renderRow={(row, idx) => <ListItem key={row}>{row}</ListItem>}
    ></List>
  );
}

export default ListItems;
