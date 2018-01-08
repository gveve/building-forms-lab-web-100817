import React, { Component } from 'react';

class BandInput extends Component {
  constructor(){
    super();

    this.state={
      text: ''
    }
  }

  inputChange = (event) => {
    this.setState({
      band_input: event.target.value
    })
  }

  handleSubmit = () => {
    console.log(this.props.store.dispatch);
    console.log(this.state);
    this.props.store.dispatch({type: 'ADD_BAND', name: this.state.text})
  }

  render() {
    return (
      <div>
        bands component
        <input type='text' onKeyDown={this.inputChange} placeholder='Your band here' />
        <button type='submit' onClick={this.handleSubmit} value='submit'>Submit</button>
      </div>
    );
  }
};

export default BandInput;
