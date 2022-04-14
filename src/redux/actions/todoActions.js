import types from "../types";
import store from '../store'

const {dispatch} = store

export const createToDoItems = (data) =>{
    console.log("create data",data)
    dispatch({
        type: types.CREATE_TODOITEMS,
        payload: data
    })
}

export const deleteToDoItems = (data) =>{
    console.log("delete data",data)
    dispatch({
        type: types.DELETE_TODOITEMS,
        payload: data
    })
}

export const updateToDoItems = (data) =>{
    console.log("update data",data)
    dispatch({
        type: types.UPDATE_TODOITEMS,
        payload: data
    })
}