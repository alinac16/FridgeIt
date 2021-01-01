import "./App.css";
import { Page, Tabbar, Tab } from "react-onsenui";
import StoragePage from "./components/StoragePage";
import ListPage from "./components/ListPage";
// import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Page>
        <Tabbar
          position="bottom"
          tabBorder
          renderTabs={(activeIndex, tabbar) => [
            {
              content: (
                <StoragePage
                  title="Storage"
                  active={activeIndex === 0}
                  tabbar={tabbar}
                />
              ),
              tab: <Tab label="Storage" icon="fa-box" />,
            },
            {
              content: (
                <ListPage
                  title="List"
                  active={activeIndex === 1}
                  tabbar={tabbar}
                />
              ),
              tab: <Tab label="List" icon="fa-th-list" />,
            },
          ]}
        />
      </Page>
    </div>
  );
}

export default App;
