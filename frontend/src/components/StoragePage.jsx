import React, { useState } from "react";
// import { Page } from "react-onsenui";
import StorageItems from "./StorageItems";
import StorageSearch from "./StorageSearch";

function StoragePage({ title }) {
  const [input, setInput] = useState("");

  function updateInput(input) {
    setInput(input);
  }
  return (
    <div className="storagePage">
      {title}
      <br />
      <StorageSearch input={input} updateInput={updateInput} />
      <StorageItems input={input} />
    </div>
  );
}

export default StoragePage;
