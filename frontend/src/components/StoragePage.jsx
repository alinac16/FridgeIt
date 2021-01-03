import React, { useState } from "react";
import { Page } from "react-onsenui";
import StorageItems from "./StorageItems";
import StorageSearch from "./StorageSearch";
// import { useItems } from "../App";

function StoragePage({ title }) {
  // const { items } = useItems();
  const [input, setInput] = useState("");

  function updateInput(input) {
    setInput(input);
  }
  return (
    <Page>
      {title}
      <br />
      <StorageSearch input={input} updateInput={updateInput} />
      <StorageItems input={input} />
    </Page>
  );
}

export default StoragePage;
