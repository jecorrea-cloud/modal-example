import React, { Component } from "react";
import Popup from "reactjs-popup";

export default class UncontrolledModal extends Component {
  render() {
    return (
        <Popup trigger={<button> Trigger</button>} position="right center">
          <div>Popup content here to the right !!</div>
        </Popup>
      
    );
  }
}
