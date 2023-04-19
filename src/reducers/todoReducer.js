

export const todoReducer = (state, action) => {

    switch (action.type) {
        case '[TODO] add to do':

            return [...state, action.payload]

        case '[TODO] delete to do':
            console.log(action.payload)
            const newState = state.filter(todo => todo.id != action.payload)
            return newState

        case '[TODO] toggle to do':
            //cambiará la propiedad done de true a false o de false a true
            const index = state.findIndex(todo => todo.id == action.payload); //finding index of the item
            const newArray = [...state]; //making a new array

            if (newArray[index].done == false) {
                newArray[index].done = true
            }//changing value in the new array
            else {
                newArray[index].done = false
            }
            return newArray //reassingning todos to new array



        default:
            return state
    }



}