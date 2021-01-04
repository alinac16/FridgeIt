import React from "react";
import { Input } from "react-onsenui";

function StorageSearch({ input, updateInput }) {
  return (
    <Input
      value={input}
      onChange={e => updateInput(e.target.value)}
      placeholder="Search Item"
      style={{
        backgroundColor: "#ffffff",
        borderRadius: 30,
        paddingLeft: 10,
        paddingRight: 8,
        paddingTop: 4,
        width: 300,
      }}
    />
  );
}

export default StorageSearch;
