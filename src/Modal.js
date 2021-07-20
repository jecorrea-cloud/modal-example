import React, { Component } from 'react'
import Popup from 'reactjs-popup'

export default class Modal extends Component {
    render() {
        return (
            <Popup trigger={<button className="button"> Open Modal </button>} modal>
                <span> Modal content centered </span>
            </Popup>
        )
    }
}