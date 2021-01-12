import React from "react";
import { ListItem, Button } from "react-onsenui";
import formatDate from "../helper";
import { useItems } from "../App";

function StorageItem({ item }) {
  const { removeItem } = useItems();

  function handleRemove() {
    removeItem(item.id);
  }

  return (
    <ListItem>
      <Button modifier="quiet" onClick={handleRemove}>
        <i class="fas fa-trash"></i>
      </Button>
      <div className="list-item__name">{item.name}</div>
      <div className="list-item__detail">
        <div className="list-item__detail--weight">{item.weight} g</div>
        <div className="list-item__detail--date">
          <i class="fas fa-calendar-day"></i> {formatDate(item.createdAt)}
        </div>
      </div>
    </ListItem>
  );
}

export default StorageItem;
