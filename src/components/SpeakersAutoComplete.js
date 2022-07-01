import React from "react";
import Select from "react-select";

const options = [
  { value: "1", label: "Κοροβέσης Γιώργος" },
  { value: "2", label: "Wissam Zein" },
  { value: "3", label: "Βασίλης Καβίδας" },
  { value: "4", label: "Βάιος Κωστέλλος" },
  { value: "5", label: "Χάρης Καραγιάννης" },
];

class SpeakersAutoComplete extends React.Component {
  state = {
    selectedOption: null,
    menuIsOpen: false,
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption: selectedOption });
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        id="mainSearch"
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        placeholder={"Select Speaker "}
      />
    );
  }
}
export default SpeakersAutoComplete;
