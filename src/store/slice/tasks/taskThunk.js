import { setTask, startLoadingTasks } from "./taskSlice"
import { fetchData } from "../../../helper/fetch"

/**
 * function that retrieves data from apis via fetch, then dispatches data to slice and reducers
 * @param {String} url url according to the endpoint that will be called
 * @param {String} method method required for endpoint 
 * @param {Object} [body] body of fetch providing data to endpoint
 */
export const getTasks = (url, method, body) => {

    return async (dispatch, getState) => {

        dispatch(startLoadingTasks())

        const data = await fetchData(url, method, body)


        dispatch(setTask({ todos: data.data, ok: data.ok, msg: data.msg }))
    }


}