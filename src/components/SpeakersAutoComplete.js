import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

class SpeakersAutoComplete extends React.Component {
  state = {
    selectedOption: null,
    menuIsOpen:false
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption:selectedOption,menuIsOpen:true });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select id="mainSearch"
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}
export default SpeakersAutoComplete