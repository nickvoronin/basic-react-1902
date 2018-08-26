import { INCREMENT, DELETE_ARTICLE, SET_DATE_FILTER } from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function setDateFilter({ from, to }) {
    return {
        type: SET_DATE_FILTER,
        payload: { from, to }
    }
}