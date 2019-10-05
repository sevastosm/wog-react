import React from 'react';
import Select from 'react-select';
import { element } from 'prop-types';

const options = [
  { value: '1', label: 'Κοροβέσης Γιώργος' },
  { value: '2', label: 'Wissam Zein' },
  { value: '3', label: 'Βασίλης Καβίδας' },
  { value: '4', label: 'Βάιος Κωστέλλος' },
  { value: '5', label: 'Χάρης Καραγιάννης' },


];

class SpeakersAutoComplete extends React.Component {
  state = {
    selectedOption: null,
    openMenu:false
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption:selectedOption,menuIsOpen:true });
    console.log(`Option selected:`, selectedOption);
  };
  handleInputChange = (query, { action }) => {
    if (action === "input-change"&&query!=="") {
        this.setState({ openMenu: true });
    }else{
      this.setState({ openMenu: false });
    }
};
hideMenu = () => {
this.setState({ openMenu: false });
};
  render() {
    const { selectedOption,openMenu } = this.state;

    return (
      <Select id="mainSearch"
        value={selectedOption}
        onInputChange={this.handleInputChange}
        onChange={this.hideMenu}
        options={options}
        placeholder ={'Select Speaker '}
        menuIsOpen={openMenu}
      />
    );
  }
}
export default SpeakersAutoComplete