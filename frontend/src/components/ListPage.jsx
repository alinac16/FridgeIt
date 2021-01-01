import React, { useState } from "react";
import { Page, Button } from "react-onsenui";
import ListItems from "./ListItems";
import ListForm from "./ListForm";

function ListPage({ title, active, tabbar }) {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems([item, ...items]);
  }

  return (
    <Page>
      {title}
      <div className="form--input">
        <ListForm></ListForm>
      </div>
      <ListItems></ListItems>
      <Button modifier="large--cta" disabled>
        Store bought items
      </Button>
    </Page>
  );
}

export default ListPage;
