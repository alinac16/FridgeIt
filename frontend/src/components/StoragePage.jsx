import React from "react";
import { Page } from "react-onsenui";
import StorageItems from "./StorageItems";
import StorageSearch from "./StorageSearch";

function StoragePage({ title, active, tabbar }) {
  return (
    <Page>
      <div>{title}</div>
      <StorageSearch></StorageSearch>
      <StorageItems></StorageItems>
    </Page>
  );
}

export default StoragePage;
