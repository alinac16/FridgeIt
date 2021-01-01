import React, { useState } from "react";
import { Page, Button } from "react-onsenui";
import WishItems from "./WishItems";
import WishForm from "./WishForm";

function WishPage({ title, active, tabbar }) {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems([item, ...items]);
  }

  return (
    <Page>
      {title}
      <div className="form--input">
        <WishForm></WishForm>
      </div>
      <WishItems></WishItems>
      <Button modifier="large--cta" disabled>
        Store bought items
      </Button>
    </Page>
  );
}

export default WishPage;
