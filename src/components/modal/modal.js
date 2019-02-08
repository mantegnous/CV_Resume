import React, { Component } from 'react';
export default class Modal extends Component {

    onClose = (e) => {
        e.stopPropagation();
        this.props.onClose && this.props.onClose(e);
    }

    render() {
        if (!this.props.show) {
            return null;
        }
        return(
            <div className="modal-container">
                <div className="modal-text z-depth-5">
                    <div className="right-align">
                    <i className="material-icons" onClick={(e) => {this.props.onClose(e)}}>close</i>
                    </div>
                <span>
                    <p>{this.props.children}</p>
                </span>
                </div>
            </div>
        );
    }
}