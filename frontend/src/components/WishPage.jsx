import React, { useEffect, useState } from "react";
import { Page, Button, Icon } from "react-onsenui";
import WishItems from "./WishItems";
import WishForm from "./WishForm";
import { useFetch } from "../hooks/useFetch";
import { createItem, deleteItem, storeItem } from "../api";

function WishPage({ title, active }) {
  const { response, error } = useFetch(
    { url: "http://localhost:8080/api/products" },
    active
  );
  const [storeBtn, setStoreBtn] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    response && setItems(response);
  }, [response]);

  useEffect(() => {
    maybeEnableBtn(items);
  }, [items]);

  if (!response) {
    return <Page>...Loading....</Page>;
  }

  async function addItem(item) {
    const newItem = await createItem(item);
    setItems(prev => [...prev, newItem]);
  }

  async function removeItem(id) {
    await deleteItem(id);
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
    setStoreBtn(
      !items.some(item => item.bought)
      // !items.filter(item => !item.dateStored).some(item => item.bought)
    );
  }

  function handleStoreBtn() {
    const toStoreIds = items.filter(item => item.bought).map(item => item.id);
    storeItem(toStoreIds);
    setItems(prev => prev.filter(item => !toStoreIds.includes(item.id)));
  }

  return (
    <Page>
      <div className="pageHeader">
        {title}
        <Icon size="20px" icon="fa-pen" />
      </div>
      <WishForm items={items} addItem={addItem}></WishForm>
      <WishItems
        items={items}
        removeItem={removeItem}
        toggleComplete={toggleComplete}
      ></WishItems>
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
