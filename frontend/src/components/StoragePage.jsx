import React, { useState } from "react";
import { Page } from "react-onsenui";
import StorageItems from "./StorageItems";
import StorageSearch from "./StorageSearch";

function StoragePage({ title, active, tabbar }) {
  const [items, setItems] = useState([]);

  function removeItem(id) {
    setItems(items.filter(item => item.id !== id));
  }
  return (
    <Page>
      {title}
      <StorageSearch></StorageSearch>
      <StorageItems items={items} removeItem={removeItem}></StorageItems>
    </Page>
  );
}

export default StoragePage;
