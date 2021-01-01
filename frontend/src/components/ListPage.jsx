import React from "react";
import { Page } from "react-onsenui";
import ListItems from "./ListItems";

function ListPage({ title, active, tabbar }) {
  return (
    <Page>
      {title}
      <ListItems></ListItems>
    </Page>
  );
}

export default ListPage;
