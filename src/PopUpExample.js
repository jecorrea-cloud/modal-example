import React, { Component } from 'react'
import Popup from 'reactjs-popup'

export default class PopUpExample extends Component {
    render() {
        return (
            <Popup
            trigger={<button className="button"> Open Modal </button>}
            modal
            nested
          >hiho</Popup>
        )
    }
}
