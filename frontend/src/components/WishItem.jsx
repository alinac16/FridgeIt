import React from "react";
import { ListItem, Button, Checkbox } from "react-onsenui";
import formatDate from "../helper";

function WishItem({ item, toggleComplete, removeItem }) {
  function handleCheckbox() {
    toggleComplete(item.id);
  }

  function handleRemove() {
    removeItem(item.id);
  }

  return (
    <ListItem>
      <Checkbox checked={item.checked} onChange={handleCheckbox} />
      <Button modifier="quiet" onClick={handleRemove}>
        <i class="fas fa-trash"></i>
      </Button>
      <div className="list-item__name">{item.name}</div>
      <div className="list-item__detail">
        <div className="list-item__detail--weight">{item.weight} g</div>
        <div className="list-item__detail--date">
          <i class="fas fa-calendar-day"></i> {formatDate(item.dateAdded)}
        </div>
      </div>
    </ListItem>
  );
}

export default WishItem;
