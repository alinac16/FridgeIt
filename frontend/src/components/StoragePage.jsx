import React from "react";
import { Page } from "react-onsenui";
import StorageItems from "./StorageItems";
import StorageSearch from "./StorageSearch";

function StoragePage({ title, active, tabbar }) {
  return (
    <Page>
      {title}
      <StorageSearch />
      <StorageItems />
    </Page>
  );
}

export default StoragePage;
