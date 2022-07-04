import React from "react";
import Select from "react-select";
import { Label } from "reactstrap";

import "./select-sermon.scss";

export default function SelectSermon({ labelValue, sermons, setFilters }) {
  const onChange = React.useCallback(
    (e) => {
      setFilters((previousValues) => ({
        ...previousValues,
        sermonsIds: e || [],
      }));
    },
    [setFilters]
  );
  const options = sermons.map((s) => {
    return { value: s.ID, label: s.Name };
  });
  return (
    <div className="select-sermon-container">
      <Select
        options={options}
        isMulti
        id="sermons"
        onChange={onChange}
        placeholder={labelValue + "..."}
      />
    </div>
  );
}
