import React       from 'react';
import { connect } from 'react-redux';

import EventBox    from './event-box';
import AddEventBox from './add-event-box';


export class Events extends React.Component {
    render() {
        let events = this.props.events.map((data, index) => {
            return <EventBox key={index} data={data} history={this.props.history}/>;
        });
        let classes = '';
        if(events.length === 0) {
            classes = 'center';
        }
        return(
            <div className="events-container">
                <h2>My Events</h2>
                {events}
                <AddEventBox className={classes} history={this.props.history}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    events: state.events.events
});

export default connect(mapStateToProps)(Events);