import "./App.css";
import { Page, Tabbar, Tab, List, ListItem } from "react-onsenui";
import { useState } from "react";

const exmapleData = ["Test 1", "Test 2"];
function App() {
  return (
    <div className="App">
      <Page>
        <Tabbar
          position="bottom"
          renderTabs={(activeIndex, tabbar) => [
            {
              content: (
                <StoragePage
                  title="Home"
                  active={activeIndex === 0}
                  tabbar={tabbar}
                />
              ),
              tab: <Tab label="Home" icon="md-home" />,
            },
            {
              content: (
                <ListPage
                  title="Settings"
                  active={activeIndex === 1}
                  tabbar={tabbar}
                />
              ),
              tab: <Tab label="Settings" icon="md-settings" />,
            },
          ]}
        />
      </Page>
    </div>
  );
}

function StoragePage({ title, active, tabbar }) {
  return (
    <Page>
      {title}
      <List
        dataSource={exmapleData}
        renderRow={(row, idx) => <ListItem key={row}>{row}</ListItem>}
      ></List>
    </Page>
  );
}

function ListPage({ title, active, tabbar }) {
  return (
    <Page>
      {title}
      <List
        dataSource={exmapleData}
        renderRow={(row, idx) => <ListItem key={row}>{row}</ListItem>}
      ></List>
    </Page>
  );
}

export default App;
