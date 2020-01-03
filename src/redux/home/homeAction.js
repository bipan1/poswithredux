import {SET_REDIRECTFLAG, FETCH_API_REQUEST, FETCH_API_SUCESS, FETCH_API_FAILURE } from './homeTypes';
import axios from 'axios';

export const setReidrectFlag = () => {
    return {
        type : SET_REDIRECTFLAG
    }
}

export const fetchApiRequest = () => {
    return {
        type : FETCH_API_REQUEST
    }
}

export const fetchApiSucess = (data) => {
    return {
        type : FETCH_API_SUCESS,
        payload : data
    }
}

export const fetchApiFailure = (error) => {
    return {
        type : FETCH_API_FAILURE,
        payload : error
    }
}

export const fetchApi = (formdata) => {
    return (dispatch) => {
        dispatch(fetchApiRequest)
        axios.get("http://192.168.80.20:8001/gender",formdata)
        .then(response => {
            const data = response.data[0]
            dispatch(fetchApiSucess(data))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchApiFailure(errorMsg))
        })
    }
}