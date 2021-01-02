import React, { useEffect, useState } from "react";
import { Page, Button } from "react-onsenui";
import WishItems from "./WishItems";
import WishForm from "./WishForm";
import "./WishPage.scss";

function WishPage({ title, active, tabbar }) {
  const [items, setItems] = useState([]);
  const [storeBtn, setStoreBtn] = useState(true);

  useEffect(() => {
    maybeEnableBtn(items);
  }, [items]);

  function addItem(item) {
    setItems([item, ...items]);
  }

  function removeItem(id) {
    setItems(items.filter(item => item.id !== id));
  }

  function toggleComplete(id) {
    setItems(prev =>
      prev.map(item => {
        if (item.id === id) {
          return { ...item, bought: !item.bought };
        }
        return item;
      })
    );
  }

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
        items={items}
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
