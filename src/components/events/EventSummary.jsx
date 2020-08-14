import React from 'react';
import moment from 'moment';

const EventSummary = ({ event }) => {
    return (
        <div className="card z-depth-0 event-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{event.title}</span>
                <p>Event is scheduled by <strong style={{ fontWeight: 'bold'}}>{event.authorFirstName} {event.authorLastName}</strong></p>
                <p className="grey-text">{ moment(event.createdAt.toDate()).calendar() }</p>
            </div>
        </div>
    )
}

export default EventSummary;