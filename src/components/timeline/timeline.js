import React, { Component } from 'react';
import Modal from "../modal/modal";
export default class TimelineEvent extends Component {

    state = {
        show: false,
    }

    showModal = () => {
        this.setState({
                ...this.state,
                show: !this.state.show
            }
        );
    }

    render() {
        return (
            <div className="timeline-event">

                <Modal onClose={this.showModal} show={this.state.show}>{this.props.timelineModal}</Modal>

                <div className="card timeline-content hoverable modal-trigger" onClick={this.showModal}>
                    <div className="card-content">
                        <span className="card-title ">{this.props.timelineTitle}</span>
                        <p>{this.props.timelineSubtitle}</p>
                    </div>
                </div>
                <div className="timeline-badge blue darken-1 white-text"><i
                    className="material-icons">{this.props.timelineIcon}</i></div>
            </div>
        );
    }
}