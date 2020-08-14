import { CREATE_EVENT, CREATE_EVENT_ERROR, DELETE_EVENT_ERROR, DELETE_EVENT } from "./actionTypes";

export const createEvent = (event) => {
    // This dispatch function dispatches action to reducer.
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database in this block
        // Initialize firestore
        const firestore = getFirestore();
        // getState returns state object
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        console.log(profile);
        firestore.collection('events').add({
            ...event,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(()=> {
            dispatch({ type: CREATE_EVENT, payload: event });
        }).catch(err => dispatch({ type: CREATE_EVENT_ERROR, payload: err }))
    }
};

export const deleteEvent = id => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        
        firestore.collection('events').doc(id)
            .delete()
            .then(() => {
            dispatch({ type: DELETE_EVENT, payload: id })
            }).catch(err => {
            dispatch({ type: DELETE_EVENT_ERROR, payload: err })
        })
    }
};