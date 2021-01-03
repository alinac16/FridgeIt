import React, { useEffect, useState } from "react";
import { Page, Button } from "react-onsenui";
import WishItems from "./WishItems";
import WishForm from "./WishForm";
import "./WishPage.scss";
import { useItems } from "../App";

function WishPage({ title, toggleComplete }) {
  const { items, addItem, removeItem } = useItems();
  const [storeBtn, setStoreBtn] = useState(true);

  useEffect(() => {
    maybeEnableBtn(items);
  }, [items]);

  // if one or more of the item is checked, enable this button
  function maybeEnableBtn(items) {
    return setStoreBtn(!items.some(item => item.bought));
  }

  return (
    <Page>
      {title}
      <div>
        <WishForm addItem={addItem}></WishForm>
      </div>
      <WishItems
        removeItem={removeItem}
        toggleComplete={toggleComplete}
      ></WishItems>
      <Button className="storeBtn" modifier="large--cta" disabled={storeBtn}>
        Store bought items
      </Button>
    </Page>
  );
}

export default WishPage;
