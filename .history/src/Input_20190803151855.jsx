import React from 'react';
import TextInput from 'react-autocomplete-input';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.handleRequestOptions = this.handleRequestOptions.bind(this);

    this.state = { options: ["apple", "apricot", "banana", "carror"] };
  }

  // text in input is "I want @ap"
  handleRequestOptions(part) {
    console.log(part);          // -> "ap", which is part after trigger "@"
    this.setState({ options: SOME_NEW_OPTION_ARRAY });
  }

  render() {
    return <TextInput onRequestOptions={this.handleRequestOptions} options={this.state.options} />;
  }
}
export default  Input;