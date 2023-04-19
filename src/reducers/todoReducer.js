

export const todoReducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        case '[TODO] add to do':

            return [...state, action.payload]

        case '[TODO] delete to do':
            console.log(action.payload)
            const newState = state.filter(todo => todo.id != action.payload)
            return newState

        case '[TODO] toggle to do':
            //cambiará la propiedad done de true a false o de false a true
            const index = state.findIndex(todo => todo.id !== action.payload); //finding index of the item
            console.log(index)
            const newArray = [...state]; //making a new array
            console.log(newArray)
            newArray[index].done = true//changing value in the new array
            return newArray //reassingning todos to new array



        default:
            return state
    }



}