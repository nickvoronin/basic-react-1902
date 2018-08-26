import { SET_DATE_FILTER, CHANGE_ARTICLES_SELECTOR } from '../constants'
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

const selectedArticles = (state = [], action) => {
    switch(action.type) {
        case CHANGE_ARTICLES_SELECTOR:
            return action.payload.selected;
        default:
            return state;
    }
};


export default combineReducers({
    dateRange,
    selectedArticles
})