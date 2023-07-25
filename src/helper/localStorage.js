export const getLocal = () => {
    return JSON.parse(localStorage.getItem('todoArray')) || [];
}


export const setLocal = (data) => {
    return localStorage.setItem('todoArray', JSON.stringify(data));
}