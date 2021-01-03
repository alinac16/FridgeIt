import React, { useState } from "react";
import { Page } from "react-onsenui";
import StorageItems from "./StorageItems";
import StorageSearch from "./StorageSearch";

function StoragePage({ title }) {
  const [input, setInput] = useState("");

  function updateInput(input) {
    setInput(input);
  }
  return (
    <Page className="page__search">
      {title}
      <br />
      <StorageSearch input={input} updateInput={updateInput} />
      <StorageItems input={input} />
    </Page>
  );
}

export default StoragePage;
