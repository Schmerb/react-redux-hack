import React from 'react';

import CirclePlus from 'icons/circle-plus';

export default class AddEventBox extends React.Component {

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    // Brings user to add event form
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    addEvent = e => {
        e.preventDefault();
        this.props.history.push({
            pathname: '/dashboard/events/add-event'
        });
    }

    render() {
        
        return(
            <div className={`event-box edit ${this.props.className}`} onClick={this.addEvent}>
                <button type="button" className="circle-plus-btn">
                    <CirclePlus />
                </button>
            </div>
        );
    }
}