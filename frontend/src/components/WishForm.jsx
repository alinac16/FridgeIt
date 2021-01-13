import React, { useState, useEffect } from "react";
import { Input, Button } from "react-onsenui";
import { v4 as uuidv4 } from "uuid";
import { createItem } from "../api";
import WishAlert from "./WishAlert";

function WishForm({ items, addItem }) {
  // TO-DO!!! refresh form once hit add
  const emptyItem = {
    name: "",
    weight: null,
    bought: false,
  };

  const [item, setItem] = useState(emptyItem);

  const [addBtn, setAddBtn] = useState(true);

  useEffect(() => {
    maybeEnableBtn(item);
  }, [item]);

  function maybeEnableBtn(item) {
    setAddBtn(item.name === "" || item.weight === null);
  }

  function handleAddBtn() {
    if (items.some(i => i.name === item.name)) {
      setShowAlert(true);
    } else {
      handleAdd();
    }
  }

  async function handleAdd(event) {
    addItem(item);
    setItem(emptyItem);
    // addItem({ ...item, id: uuidv4() });
    // setItem({ ...item, name: "", weight: null });
  }

  const [showAlert, setShowAlert] = useState(false);

  function handleCancel() {
    setShowAlert(prev => !prev);
  }

  // function isValid(item) {

  //   }
  // }

  return (
    <div className="form">
      <WishAlert alert={showAlert} handleCancel={handleCancel}></WishAlert>
      <Input
        class="form__input--itemName"
        value={item.name}
        onChange={event => {
          setItem(prev => ({ ...prev, name: event.target.value }));
        }}
        modifier="transparent"
        style={{
          backgroundColor: "#ffffff",
          borderRadius: 30,
          paddingLeft: 10,
          paddingRight: 8,
          paddingTop: 4,
        }}
        placeholder="Item Name"
      />
      <Input
        class="form__input--weight"
        value={item.weight}
        onChange={event => {
          setItem(prev => ({ ...prev, weight: event.target.value }));
        }}
        modifier="transparent"
        style={{
          backgroundColor: "#ffffff",
          borderRadius: 30,
          paddingLeft: 10,
          paddingRight: 8,
          paddingTop: 4,
        }}
        placeholder="grams"
        type="number"
      />
      <Button modifier="cta" disabled={addBtn} onClick={handleAddBtn}>
        Add
      </Button>
    </div>
  );
}

export default WishForm;
