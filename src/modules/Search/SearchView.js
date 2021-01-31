import React from "react";
import PlaceholderInput from "../../components/Input/PlaceholderInput";

export default ({ value, onChange }) => (
  <PlaceholderInput value={value} placeholder={"SEARCH: "} onChange={onChange} />
);
