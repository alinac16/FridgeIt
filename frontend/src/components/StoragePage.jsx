import React, { useEffect, useState } from "react";
import { Page } from "react-onsenui";
import { useFetch } from "../hooks/useFetch";
import StorageItems from "./StorageItems";
import StorageSearch from "./StorageSearch";

function StoragePage({ title }) {
  const { response, error } = useFetch(
    "http://localhost:8080/api/products/?stored=true"
  );
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    response && setItems(response);
  }, [response]);

  function updateInput(input) {
    setInput(input);
  }
  return (
    <Page>
      <div className="pageHeader">{title}</div>
      <br />
      <div className="form">
        <StorageSearch input={input} updateInput={updateInput} />
      </div>
      <StorageItems items={items} input={input} />
    </Page>
  );
}

export default StoragePage;
