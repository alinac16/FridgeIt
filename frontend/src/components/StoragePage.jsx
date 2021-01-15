import React, { useEffect, useState } from "react";
import { Page } from "react-onsenui";
import { deleteItem } from "../api";
import { useFetch } from "../hooks/useFetch";
import StorageItems from "./StorageItems";
import StorageSearch from "./StorageSearch";

// immediate reflection of item stored ==> make another fetch request when you switch tabs
// search bar refactoring, will not search until cursor clicks

function StoragePage({ title, active }) {
  const [input, setInput] = useState("");
  const { response, error } = useFetch(
    { url: `http://localhost:8080/api/products/?stored=true&name=${input}` },
    active
  );
  const [items, setItems] = useState([]);

  useEffect(() => {
    response && setItems(response);
  }, [response]);

  if (!response) {
    return (
      <Page>
        <div>...Loading....</div>
      </Page>
    );
  }

  function updateInput(inputUpdate) {
    setInput(inputUpdate);
  }
  // function filterItem() {
  //   setItems(prev => prev.filter(item => item.name.includes(input)));
  // }

  async function removeItem(id) {
    await deleteItem(id);
    setItems(prev => prev.filter(item => item.id !== id));
  }
  return (
    <Page>
      <div className="pageHeader">{title}</div>
      <br />
      <div className="form">
        <StorageSearch input={input} updateInput={updateInput} />
      </div>
      <StorageItems items={items} input={input} removeItem={removeItem} />
    </Page>
  );
}

export default StoragePage;
