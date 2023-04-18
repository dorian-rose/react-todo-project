

export const todoReducer = (state, action) => {

    switch (action.type) {
        case '[TODO] add to do':

            return [...state, action.payload]

        case '[TODO] delete todo':

            return

        case '[TODO] toggle todo':
            //cambiará la propiedad done de true a false o de false a true
            return

        default:
            return state
    }



}