import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SignedInLinks from './SignedInLinks.jsx';
import SignedOutLinks from './SignedOutLinks.jsx';
import PropTypes from 'prop-types';

const Navbar = (props) => {
    const { auth, profile } = props;
    // console.log(auth);
    const whichLinks = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
    return (
        <nav className="nav-wrapper blue darken-4">
            <div className="container">
                <Link to="/" className="brand-logo hide-on-med-only hide-on-small-only">XacBank LMS</Link>
                {/* put spinner later */}
                { auth.isLoaded &&  whichLinks }
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);