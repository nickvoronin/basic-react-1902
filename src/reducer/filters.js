import { SET_DATE_FILTER } from '../constants'
import { combineReducers } from 'redux'

const dateRange = (state = { from: null, to: null }, action) => {
    switch(action.type) {
        case SET_DATE_FILTER:
            return {
                from: action.payload.from,
                to: action.payload.to
            };
        default:
            return state;
    }
};


export default combineReducers({
    dateRange
})