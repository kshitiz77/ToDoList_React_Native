import types from "../types";
import { setToDoDetails } from '../../utils/utils';
const initialState = {
    todoItems: [],
}

const todoItemsFun = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case types.CREATE_TODOITEMS: 
        let newArray = state.todoItems.concat(action.payload)
        setToDoDetails(newArray).then((val)=>{
            console.log("my store data",val)
        })
        return {
            ...state,
            todoItems: newArray,       
        }
        case types.DELETE_TODOITEMS:
            let newArr = [...state.todoItems];
            let userId = action.payload.userId
            console.log(userId)
            const index = state.todoItems.findIndex((todoItem) => todoItem.userId === userId);

            console.log(index)
            if (index >= 0) {
                // item exists in todoItems, remove it...
                newArr.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product (id: ${action.payload} ) as its not in cart.`
                )
            }
            setToDoDetails(newArr).then((val)=>{
                console.log("my store data",val)
            })
            return {
                ...state,
                todoItems: newArr,
            }
        case types.UPDATE_TODOITEMS:
            let updateArr = [...state.todoItems];
            let userID = action.payload.userId
            console.log(userID)
            let updateUserIndex = state.todoItems.findIndex((todoItem) => todoItem.userId === userID);
            console.log('updateUserIndex', updateUserIndex)
            updateArr[updateUserIndex] = action.payload
            setToDoDetails(updateArr).then((val)=>{
                console.log("my store data",val)
            })
            return {
                ...state,
                todoItems: updateArr
            }

        default: return state;
    }
}

export default todoItemsFun;