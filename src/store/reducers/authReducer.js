import { 
    LOGIN_ERROR, 
    LOGIN_SUCCESS, 
    SIGN_OUT, 
    SIGNUP_SUCCESS, 
    SIGNUP_ERROR 
} from "../actions/actionTypes";
const initialState = {
    authError: null
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            console.log("Login Success")
            return {
                ...state,
                authError: null
            }
        case LOGIN_ERROR:
            console.log('Login error', action.payload)
            return {
                ...state,
                authError: 'Login failed'
            }
        case SIGN_OUT:
            console.log("Sign Out Success");
            return state;
        case SIGNUP_SUCCESS:
            console.log("Success in Sign up")
            return {
                ...state,
                authError: null
            }
        case SIGNUP_ERROR:
            console.log("Fail in Sign up")
            return {
                ...state,
                authError: 'Failed to sign up: ' + action.payload.message
            }
        default:
            return state;
    }
}

export default authReducer;