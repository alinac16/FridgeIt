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
    <Page>
      <div className="pageHeader">{title}</div>
      <br />
      <div className="form">
        <StorageSearch input={input} updateInput={updateInput} />
      </div>
      <StorageItems input={input} />
    </Page>
  );
}

export default StoragePage;
