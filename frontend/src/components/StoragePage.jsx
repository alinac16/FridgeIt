import React from "react";
import { Page } from "react-onsenui";
import StorageItems from "./StorageItems";

function StoragePage({ title, active, tabbar }) {
  return (
    <Page>
      <div>{title}</div>
      <StorageItems></StorageItems>
    </Page>
  );
}

export default StoragePage;
