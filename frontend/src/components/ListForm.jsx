import React, { useState } from "react";
import { Input, Button } from "react-onsenui";
import { v4 as uuidv4 } from "uuid";

function ListForm({ addItem }) {
  const [item, setItem] = useState({
    name: "",
    weight: 0,
    status: "unchecked",
    dateAdded: new Date().getDate(),
    dateStored: null,
  });

  function handleAdd(event) {
    event.preventDefault();
    addItem({ ...item, id: uuidv4() });
    setItem({ ...item, name: "" });
  }

  return (
    <>
      <Input
        value={item.name}
        onChange={event => {
          setItem(prev => ({ ...prev, name: event.target.value }));
        }}
        modifier="material"
        placeholder="Item Name"
        float
      />
      <Input
        value={item.weight}
        onChange={event => {
          setItem(prev => ({ ...prev, weight: event.target.value }));
        }}
        modifier="material"
        placeholder="grams"
        float
      />
      <Button modifier="cta" onClick={handleAdd}>
        Add
      </Button>
    </>
  );
}

export default ListForm;
