import React from "react";
import Select from "react-select";
import { Label } from "reactstrap";

import "./select-speaker.scss";

export default function SelectSpeaker({
  labelValue,
  speakers,
  // values,
  setFilters,
}) {
  const onChange = React.useCallback(
    (e) => {
      setFilters((previousValues) => ({
        ...previousValues,
        speakersIds: e || [],
      }));
    },
    [setFilters]
  );
  const options = speakers.map((s) => {
    return { value: s.ID, label: s.Name };
  });

  return (
    <div className="select-speakers-container">
      <Select
        options={options}
        isMulti
        placeholder={labelValue + "..."}
        id="speakers"
        onChange={onChange}
      />
    </div>
  );
}
