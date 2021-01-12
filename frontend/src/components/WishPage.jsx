import React, { useEffect, useState } from "react";
import { Page, Button, Icon } from "react-onsenui";
import WishItems from "./WishItems";
import WishForm from "./WishForm";
import { useFetch } from "../hooks/useFetch";
import { createItem, deleteItem, storeItem } from "../api";

function WishPage({ title, toggleComplete }) {
  const { response, error } = useFetch("http://localhost:8080/api/products");
  const [storeBtn, setStoreBtn] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    response && setItems(response);
  }, [response]);

  useEffect(() => {
    maybeEnableBtn(items);
  }, [items]);

  if (!response) {
    return <div>...Loading....</div>;
  }

  async function addItem(item) {
    const newItem = await createItem(item);
    setItems(prev => [...prev, newItem]);
  }

  async function removeItem(id) {
    await deleteItem(id);
    setItems(items.filter(item => item.id !== id));
  }

  // if one or more of the item is checked, enable this button
  function maybeEnableBtn(items) {
    setStoreBtn(
      !items.filter(item => !item.dateStored).some(item => item.bought)
    );
  }

  function handleStoreBtn() {
    storeItem(items);
    // setItems(prev =>
    //   prev.map(item => {
    //     if (item.bought) {
    //       return { ...item, dateStored: date };
    //     }
    //     return item;
    //   })
    // );
    // console.log();
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
