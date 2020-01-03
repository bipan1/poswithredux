import {SET_REDIRECTFLAG, FETCH_API_REQUEST, FETCH_API_SUCESS, FETCH_API_FAILURE } from './homeTypes';

const initialState = {
    loading : false,
    error : '',
    primaryList : [],
    flag : false,
    redirectFlag : false
}

const homeReducer = (state= initialState, action) => {
    switch(action.type) {
        case FETCH_API_REQUEST:
            return {
                ...state,
                loading : true
            }

        case FETCH_API_SUCESS:
            return {
                ...state,
                loading : false,
                primaryList : action.payload,
                error : '',
                flag : true
            }
        
        case FETCH_API_FAILURE:
            return {
                ...state,
                falg : false,
                loading : false,
                primaryList : [],
                error : action.payload
            }

        case SET_REDIRECTFLAG:
            return {
                ...state,
                redirectFlag : true
            }

        default : return state
    }
}
export default homeReducer;