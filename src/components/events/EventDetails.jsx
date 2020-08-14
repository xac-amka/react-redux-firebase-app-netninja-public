import React from 'react';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import { deleteEvent } from '../../store/actions/eventActions';
import moment from 'moment';

// const handleDelete = e => {
//     const { id } = this.props;
//     e.preventDefault();
//     this.props.deleteEvent(id);
//     // you can push to dashboard after deleting...
// }

const EventDetails = (props) => {
        
    // const id = props.match.params.id;
    const { event, auth, id, deleteEvent, history } = props;
    if( !auth.uid ) return <Redirect to="/signin" />

    const handleDelete = e => {
        e.preventDefault();
        deleteEvent(id);
        // you can push to dashboard after deleting...
        history.push("/");
    }

    if(event){
        return (
            <div className="container section event-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title"> {event.title} </span>
                        <p>{event.description}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                    <div>Event scheduled by {event.authorFirstName} {event.authorLastName}</div>
                        <div>{ moment(event.createdAt.toDate()).calendar() }</div>
                    </div>
                    <button style={{ margin: 20 }} className="btn-floating btn-small waves-effect waves-light red" onClick={handleDelete}>
                        <span className="material-icons center">delete_forever</span>
                    </button>
                </div>
            </div>
        )
    } else {
        return ( <div className="container center"><p className="white-text">Loading events..</p></div> );
    }
};

EventDetails.propTypes = {
    event: PropTypes.object,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    console.log(id);
    const events = state.firestore.data.events;
    const event = events && events[id];
    return { 
        id,
        event,
        auth: state.firebase.auth
     };
}

const mapDistpacthToProps = dispatch => {
    return {
        deleteEvent: (id) => dispatch(deleteEvent(id))
    }
}

export default compose(
    connect(mapStateToProps, mapDistpacthToProps),
    firestoreConnect([
        { collection: "events" }
    ])
)(EventDetails);

// Update bolon Delete zasah
