import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

const PrivateRoute = (props, { component: Component, ...rest } ) => {
    const { auth } = props;
    if(!auth.uid) return <Redirect to="/signin" />
    return <Route {...rest} component={Component} />
}

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(PrivateRoute);
