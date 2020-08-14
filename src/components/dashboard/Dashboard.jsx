import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Notifications from './Notifications.jsx';
import PaginateControl from '../layout/PaginateControl.jsx';
// import EventList from '../events/EventList.jsx';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import PropTypes from 'prop-types';

class Dashboard extends Component {
    render() {
        const { events, auth, notifications } = this.props;
        if(!auth.uid) return <Redirect to="/signin" />
        
        return (
            <div className="dashboard container">
                <div className="row">
                    <h1 className="text-primary center">My Events</h1>
                </div>
                <div className="row">
                    <div className="col s12 m6">
                        {/* <EventList events={events} /> */}
                        { events && <PaginateControl events={events} /> }
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications} />
                    </div>
                </div>
            </div>
        )
    }
}

Dashboard.propType = {
    events: PropTypes.array.isRequired,
    notifications: PropTypes.array.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        events: state.firestore.ordered.events,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

// connect takes only one High order component, if we want to add more high order component we have to use compose()
export default compose(
    connect(mapStateToProps), 
    firestoreConnect([
        { collection: "events", orderBy: ['createdAt', 'desc']},
        { collection: "notifications", limit: 3, orderBy: ['time', 'desc']}
    ])
)(Dashboard);