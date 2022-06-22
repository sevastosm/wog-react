import React from "react";
import { Label, Input } from "reactstrap";

import "./searchbar.scss";

export default function Searchbar({ labelValue, value, setFilters }) {
  const onChange = React.useCallback(
    (e) => {
      const { name, value } = e.target;
      setFilters((previousFilters) => ({
        ...previousFilters,
        [name]: value,
      }));
    },
    [setFilters]
  );

  return (
    <div className="searchbar-container">
      <Input
        type="text"
        name="text"
        value={value}
        onChange={onChange}
        id="search"
        placeholder={labelValue + "..."}
      />
    </div>
  );
}
