export const getLocal = () => {
    return JSON.parse(localStorage.getItem('todo')) || [];
}


export const setLocal = (data) => {
    return localStorage.setItem('tasks', JSON.stringify(data));
}