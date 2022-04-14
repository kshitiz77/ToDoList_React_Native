import types from "../types";

export const login = (data) =>{
    return{
        type: types.LOGIN,
        payload: data
    }
}

export const logout = (data) =>{
    return{
        type: types.USER_LOGOUT,
        payload: data
    }
}