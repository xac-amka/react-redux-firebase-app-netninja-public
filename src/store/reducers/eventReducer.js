import { CREATE_EVENT, CREATE_EVENT_ERROR, DELETE_EVENT, DELETE_EVENT_ERROR } from "../actions/actionTypes"

const initialState = {};

const eventReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_EVENT:
            console.log('created project', action.payload);
            return {
                ...state
            }
        case CREATE_EVENT_ERROR:
            console.log("error occured", action.payload)
            return state;
        case DELETE_EVENT:
            console.log('delete event', action.payload);
            return state;
        case DELETE_EVENT_ERROR:
            console.log('delete event error', action.payload);
            return state;
        default:
            return state;
        }
}

export default eventReducer;