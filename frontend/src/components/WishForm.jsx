import React, { useState, useEffect } from "react";
import { Input, Button } from "react-onsenui";
import { v4 as uuidv4 } from "uuid";
import { useItems } from "../App";
import WishAlert from "./WishAlert";

function WishForm() {
  const { items, addItem } = useItems();
  const date = new Date();
  const [item, setItem] = useState({
    id: "",
    name: "",
    weight: null,
    bought: false,
    dateAdded: date,
    dateStored: null,
  });

  const [addBtn, setAddBtn] = useState(true);
  console.log(addBtn);

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

  function handleAdd(event) {
    addItem({ ...item, id: uuidv4() });
    setItem({ ...item, name: "", weight: null });
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
        float
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
        float
      />
      <Button modifier="cta" disabled={addBtn} onClick={handleAddBtn}>
        Add
      </Button>
    </div>
  );
}

export default WishForm;
