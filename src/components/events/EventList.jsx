import React from 'react';
import EventSummary from './EventSummary.jsx';
import { Link } from 'react-router-dom';

const EventList = ({ events, loading }) =>  {
    if(loading){
        return <h2>loading ...</h2>
    }

    return(
        <div className="event-list section"> 
            {events && events.map(event => <Link to={'/event/'+event.id}  key={event.id} ><EventSummary event={event} /></Link> )}
        </div>
    )
}

export default EventList;