import React from "react";
import { SearchInput } from "react-onsenui";

function StorageSearch({ input, updateInput }) {
  return (
    <SearchInput
      value={input}
      onChange={e => updateInput(e.target.value)}
      placeholder="Item Name"
    />
  );
}

export default StorageSearch;
