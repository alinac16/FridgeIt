import React, { useEffect, useState } from "react";
import { Page, Button } from "react-onsenui";
import WishItems from "./WishItems";
import WishForm from "./WishForm";
import { useItems } from "../App";

function WishPage({ title, toggleComplete }) {
  const { items, setItems } = useItems();
  const [storeBtn, setStoreBtn] = useState(true);
  const date = new Date();

  useEffect(() => {
    maybeEnableBtn(items);
  }, [items]);

  // if one or more of the item is checked, enable this button
  function maybeEnableBtn(items) {
    return setStoreBtn(
      !items.filter(item => !item.dateStored).some(item => item.bought)
    );
  }

  function handleStoreBtn() {
    setItems(prev =>
      prev.map(item => {
        if (item.bought) {
          return { ...item, dateStored: date };
        }
        return item;
      })
    );
  }

  return (
    <Page>
      {title}
      <div>
        <WishForm></WishForm>
      </div>
      <WishItems toggleComplete={toggleComplete}></WishItems>
      <Button
        modifier="large--cta"
        disabled={storeBtn}
        onClick={handleStoreBtn}
      >
        Store bought items
      </Button>
    </Page>
  );
}

export default WishPage;
