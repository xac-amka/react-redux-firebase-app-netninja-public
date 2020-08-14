import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createEvent } from '../../store/actions/eventActions';
import PropTypes from 'prop-types';

class CreateEvent extends Component {
    state = {
        title: '',
        description: '',
        date: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        const { createEvent } = this.props;
        e.preventDefault();
        // console.log(this.state);
        createEvent(this.state);
        // Redirecting to home page / dashboard
        this.props.history.push("/");
    }

    render() {
        if(!this.props.auth.uid) return <Redirect to="/signin" />

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create A Brand New Event</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="description">Event Description</label>
                        <textarea id="description" className="materialize-textarea" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn blue lighten-1 z-depth-0">Create Event</button>
                    </div>
                </form>
            </div>
        )
    }
}

CreateEvent.propType = {
    createEvent: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        createEvent: (event) => dispatch(createEvent(event))
    }
}
// mapStateToProps is first parameter, in this case we don't have it. So we put null here.
export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
