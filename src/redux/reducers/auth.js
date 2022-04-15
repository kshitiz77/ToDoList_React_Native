import types from "../types";
import { setUserData } from "../../utils/utils";


const initialState = {
    userData: {}
}

const userStatus = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case types.LOGIN:
            let newArr = action.payload;
            setUserData(newArr).then((val) => {
                console.log("my store data", val)
            })
            return {
                ...state.userData,
                userData: newArr
            }
        case types.USER_LOGOUT:
            let newUserData = { ...state.userData }
            newUserData = undefined;
            // delete newUserData;
            setUserData(newUserData)
            return { ...state.userData, 
                userData: newUserData 
            };
        default: return state;
    }
}

export default userStatus;