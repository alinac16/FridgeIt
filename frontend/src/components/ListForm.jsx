import React from "react";
import { Input, Button } from "react-onsenui";

function ListForm() {
  return (
    <>
      <Input
        // value={this.state.text} float
        // onChange={(event) => { this.setState({text: event.target.value})} }
        modifier="material"
        placeholder="Item Name"
        float
      />
      <Input modifier="material" placeholder="grams" float />
      <Button modifier="cta">Add</Button>
    </>
  );
}

export default ListForm;
