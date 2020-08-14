import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import PropTypes from 'prop-types';

const SignedInLinks = ({ signOut, profile }) => {
    // Firebase deer n add hiisen hunii medeelel sync bolooguig zasah
    const initTitle = profile.firstName ? profile.firstName + ' ' + profile.lastName : "Amka George"
    const initName = profile.initials ? profile.initials : "AG" 
    return (
        <ul className="right">
            <li><NavLink to="/create">New Event</NavLink></li>
            <li><a href="#logout" onClick={signOut}>Log Out</a></li>
            <li><NavLink to="/profile" className="btn btn-floating pink lighten-1" title={initTitle}>{initName}</NavLink></li>
        </ul>
    )
}

SignedInLinks.propTypes = {
    signOut: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);