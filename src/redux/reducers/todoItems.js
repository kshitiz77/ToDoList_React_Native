import types from "../types";

const initialState = {
    todoItems: [],
}

const todoItemsFun = (state = initialState, action) => {
    switch (action.type) {
        case types.CREATE_TODOITEMS: return {
            ...state,
            todoItems: [...state.todoItems, action.item]
        }
        case types.DELETE_TODOITEMS:
            let newArr = [...state.todoItems];

            const index = state.todoItems.findIndex((todoItem) => todoItem.userId === action.userId);

            console.log(index)
            if (index >= 0) {
                // item exists in todoItems, remove it...
                newArr.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product (id: ${action.userId} ) as its not in cart.`
                )
            }
            return {
                ...state,
                todoItems: newArr,
            }
        case types.UPDATE_TODOITEMS:
            let updateArr = [...state.todoItems];

            let updateUserIndex = state.todoItems.findIndex((todoItem) => todoItem.userId === action.item.userId);

            updateArr[updateUserIndex] = action.item
            return {
                ...state,
                todoItems: updateArr
            }

        default: return state;
    }
}

export default todoItemsFun;