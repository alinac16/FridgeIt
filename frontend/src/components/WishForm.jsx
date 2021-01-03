import React, { useState } from "react";
import { Input, Button } from "react-onsenui";
import { v4 as uuidv4 } from "uuid";
import { useItems } from "../App";

function WishForm() {
  const { addItem } = useItems();
  const date = new Date();
  const [item, setItem] = useState({
    id: "",
    name: "",
    weight: null,
    bought: false,
    dateAdded: date,
    dateStored: null,
  });

  function handleAdd(event) {
    event.preventDefault();

    addItem({ ...item, id: uuidv4() });
    setItem({ ...item, name: "", weight: null });
  }

  return (
    <div className="form">
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
        type="number"
        float
      />
      <Button modifier="cta" onClick={handleAdd}>
        Add
      </Button>
    </div>
  );
}

export default WishForm;
