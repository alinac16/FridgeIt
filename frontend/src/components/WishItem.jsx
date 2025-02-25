import React from "react";
import { ListItem, Button, Checkbox } from "react-onsenui";
import { deleteItem } from "../api";
import formatDate from "../helper";
// import { useSwipeable } from "react-swipeable";

function WishItem({ item, toggleComplete, removeItem }) {
  function handleCheckbox() {
    toggleComplete(item.id);
  }

  async function handleRemove(event) {
    removeItem(item.id);
  }

  // const handlers = useSwipeable({
  //   onSwipedLeft: () => {
  //     return ,
  //   onSwipedRight: () => slide(PREV),
  //   preventDefaultTouchmoveEvent: true,
  //   trackMouse: true
  // });

  return (
    <ListItem>
      <Button modifier="quiet" onClick={handleRemove}>
        <i class="fas fa-trash"></i>
      </Button>
      <Checkbox checked={item.checked} onChange={handleCheckbox} />
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

export default WishItem;
