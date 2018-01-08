import React, { Component } from 'react';

const get_bands = () => {
  this.props.store.getState();
}

class Bands extends Component {

  show_bands = () => {
    if (get_bands.length > 0) {
      return (
        get_bands.map((band) => {
          return `<li>${band.name}</li>`;
        }).join(' ')
      )
    } else {
    return(<p>"You Band Sucks!"</p>)
    }
  }

  render(){
    console.log(this.props.store.getState());
    return (
      <div>
        band input
        <ul>{this.show_bands()}</ul>
      </div>
    );
  }
};

export default Bands;
