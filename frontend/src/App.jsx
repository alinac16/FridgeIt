import "./App.css";
import { Page, Tabbar, Tab } from "react-onsenui";
import StoragePage from "./components/StoragePage";
import WishPage from "./components/WishPage";
import React from "react";

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
                <WishPage
                  title="Wish"
                  active={activeIndex === 1}
                  tabbar={tabbar}
                />
              ),
              tab: <Tab label="Wish" icon="fa-th-list" />,
            },
          ]}
        />
      </Page>
    </div>
  );
}

export default App;
