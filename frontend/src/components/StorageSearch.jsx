import React from "react";
import { SearchInput } from "react-onsenui";

<SearchInput
  value={this.state.text}
  onChange={event => {
    this.setState({ text: event.target.value });
  }}
  modifier="material"
  placeholder="Username"
/>;
