import "./App.css";
import { Page, Tabbar, Tab } from "react-onsenui";
import StoragePage from "./components/StoragePage";
import WishPage from "./components/WishPage";
import React, { createContext, useContext, useState } from "react";

const ItemsContext = createContext(null);

export function useItems() {
  return useContext(ItemsContext);
}

function App() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems(prev => [...prev, item]);
  }

  function removeItem(id) {
    setItems(items.filter(item => item.id !== id));
  }

  return (
    <div className="App">
      <ItemsContext.Provider value={{ items, setItems, addItem, removeItem }}>
        <Page>
          <Tabbar
            position="bottom"
            tabBorder
            index={0}
            renderTabs={activeIndex => [
              {
                content: (
                  <StoragePage title="Storage" active={activeIndex === 0} />
                ),
                tab: <Tab label="Storage" icon="fa-box" />,
              },
              {
                content: <WishPage title="Wish" active={activeIndex === 1} />,
                tab: <Tab label="Wish" icon="fa-th-list" />,
              },
            ]}
          />
        </Page>
      </ItemsContext.Provider>
    </div>
  );
}

export default App;
